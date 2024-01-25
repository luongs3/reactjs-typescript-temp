import { useParams } from 'react-router-dom'

export default function Login() {
  const { access_token } = useParams()
  console.log('access_token', access_token)
  return <div>Login page</div>
}
