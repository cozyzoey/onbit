import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import history from '../../utils/history'
import { login } from '../../actions/userActions'
import BasicBtn from '../../components/BasicBtn'
import Alert from '../../components/Alert'
import './Login.scss'

function Login({ location }) {
  const [email, setEmail] = useState('contact@onbitclinic.com')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const { userInfo, loading, error } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
    if (error) {
      setErrorMsg('비밀번호를 확인해주세요')
    } else {
      setErrorMsg('')
    }
  }, [userInfo, redirect, error])

  const onLogin = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className='login'>
      <Helmet>
        <title>로그인 &ndash; 온빛정신건강의학과의원</title>
        <meta name='robots' content='noindex' />
      </Helmet>
      {errorMsg && <Alert variant='error'>{errorMsg}</Alert>}
      <div className='login--box'>
        <h2>온빛정신건강의학과</h2>
        <form onSubmit={onLogin}>
          <input
            type='email'
            value={email}
            name='email'
            placeholder='이메일'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            value={password}
            name='password'
            placeholder='비밀번호'
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <BasicBtn type='submit' variant='info' disabled={loading}>
            로그인
          </BasicBtn>
        </form>
      </div>
    </div>
  )
}

export default Login
