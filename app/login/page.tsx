
import * as card from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { Header } from '../components/Header'

export const isLoggedIn: boolean = false

const LoginPage = () => {
    return (
        <div>
            <Header />
            <div id='login-section' className='m-3 w-full'>
                <card.Card>
                    <card.CardHeader>
                        <card.CardTitle>Login</card.CardTitle>
                    </card.CardHeader>
                    <card.CardContent>
                        <Button className='hover:bg-blue-400'>Login with Telegram</Button><br />
                        <Button className='mt-1 hover:bg-red-400'>Login with Google Account</Button>
                    </card.CardContent>
                </card.Card>
            </div>
        </div>
    )
}

export default LoginPage