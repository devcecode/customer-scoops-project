import { useState } from "react"
import StepOne from "./StepOne"
import styled from "styled-components"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import StepFive from "./StepFive"
import StepSix from "./StepSix"

import deskImage from '../images/hero/desk-logo.png'

function Steps() {
  const [step, setStep]             = useState<number>(1)

  const [ userName, setUserName ]   = useState<string>('')

  const [ challenge, setChallenge ] = useState<string>('')

  const [ crm, setCrm ]             = useState<string>('')

  const [ industry, setIndustry]    = useState<string>('')

  return (
    <StepsStyled>
      <Logo src={deskImage} />
      { step === 1 && <StepOne userName={userName} setUserName={setUserName} setStep={setStep}/> }

      { step === 2 && <StepTwo userName={userName} setStep={setStep}/> }

      { step === 3 && <StepThree setChallenge={setChallenge} setStep={setStep}/> }

      { step === 4 && <StepFour setCrm={setCrm} setStep={setStep}/> }

      { step === 5 && <StepFive setIndustry={setIndustry} setStep={setStep}/> }

      { step === 6 && <StepSix /> }
    </StepsStyled>
  )
}

export default Steps

const StepsStyled = styled.div`
width: 305px;
margin: 0 auto;
margin-top: 3.1rem;

@media(min-width: 1244px) {
  width: 406px;
}
`

const Logo = styled.img`
display: none;

@media(min-width: 1244px) {
  display: block;
  width: 113px;
  margin-bottom: 2.1rem;
}
`
