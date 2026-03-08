// V2.0 面试流程主组件 - 含级别选择
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import RoleSelect from './RoleSelect'
import LevelSelect from './LevelSelect'
import CompanySelect from './CompanySelect'
import JDPreview from './JDPreview'
import QuestionPage from './QuestionPage'
import InterviewResult from './InterviewResult'
import { companyList, positionJD } from '../data/companyJD'

export default function InterviewFlow({ onBack }) {
  // 流程步骤: role -> level -> company -> jd -> interview -> result
  const [step, setStep] = useState('role')
  
  // 面试数据
  const [role, setRole] = useState('')
  const [level, setLevel] = useState('')  // L1/L2/L3/L4
  const [companyId, setCompanyId] = useState('')
  const [positionId, setPositionId] = useState('')
  const [answers, setAnswers] = useState([])

  // 获取公司信息
  const companyInfo = companyList.find(c => c.id === companyId)
  const positionInfo = companyId && positionId ? positionJD[companyId]?.[positionId] : null

  // 角色选择
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole)
  }

  const handleRoleNext = () => {
    if (role) setStep('level')
  }

  const handleRolePrev = () => {
    onBack()
  }

  // 级别选择
  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel)
  }

  const handleLevelNext = () => {
    if (level) setStep('company')
  }

  const handleLevelPrev = () => {
    setStep('role')
  }

  // 公司选择
  const handleCompanySelect = (company) => {
    setCompanyId(company)
    setPositionId('')
  }

  const handlePositionSelect = (position) => {
    setPositionId(position)
  }

  const handleCompanyNext = () => {
    if (companyId && positionId) setStep('jd')
  }

  const handleCompanyPrev = () => {
    setStep('level')
  }

  // JD 预览
  const handleStartInterview = () => {
    setStep('interview')
    setAnswers([])
  }

  const handleJDPrev = () => {
    setStep('company')
  }

  // 答题
  const handleAnswerChange = (index, answer, question) => {
    const existing = answers.find(a => a.index === index)
    if (existing) {
      setAnswers(answers.map(a => a.index === index ? { ...a, answer, question } : a))
    } else {
      setAnswers([...answers, { index, answer, question }])
    }
  }

  const handleInterviewFinish = () => {
    setStep('result')
  }

  // 重新开始
  const handleRestart = () => {
    setStep('role')
    setRole('')
    setLevel('')
    setCompanyId('')
    setPositionId('')
    setAnswers([])
  }

  const handleResultBack = () => {
    onBack()
  }

  return (
    <AnimatePresence mode="wait">
      {step === 'role' && (
        <RoleSelect
          key="role"
          selected={role}
          onSelect={handleRoleSelect}
          onNext={handleRoleNext}
        />
      )}

      {step === 'level' && (
        <LevelSelect
          key="level"
          selected={level}
          onSelect={handleLevelSelect}
          onNext={handleLevelNext}
        />
      )}

      {step === 'company' && (
        <CompanySelect
          key="company"
          selectedCompany={companyId}
          selectedPosition={positionId}
          onSelectCompany={handleCompanySelect}
          onSelectPosition={handlePositionSelect}
          onNext={handleCompanyNext}
          onPrev={handleCompanyPrev}
        />
      )}

      {step === 'jd' && (
        <JDPreview
          key="jd"
          companyId={companyId}
          positionId={positionId}
          onStart={handleStartInterview}
          onPrev={handleJDPrev}
        />
      )}

      {step === 'interview' && (
        <QuestionPage
          key="interview"
          role={role}
          level={level}
          company={companyId}
          position={positionId}
          companyInfo={companyInfo}
          positionInfo={positionInfo}
          onAnswerChange={handleAnswerChange}
          onFinish={handleInterviewFinish}
        />
      )}

      {step === 'result' && (
        <InterviewResult
          key="result"
          role={role}
          level={level}
          company={companyId}
          position={positionId}
          companyInfo={companyInfo}
          positionInfo={positionInfo}
          answers={answers}
          onRestart={handleRestart}
          onBack={handleResultBack}
        />
      )}
    </AnimatePresence>
  )
}
