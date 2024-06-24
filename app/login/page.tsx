
import * as card from '@/components/ui/card'
import { Button } from '@/components/ui/button'


import { Header } from '../page'
import { Icon, MessageCircle } from 'lucide-react'


const LoginPage = () => {
    return (
        <div>
            <Header />
            {/* Here goes the login stuff */}
            <div id='login-section' className='m-3 w-full'>
                <card.Card>
                    <card.CardHeader>
                        <card.CardTitle>Login</card.CardTitle>
                    </card.CardHeader>
                    <card.CardContent>
                        <Button>Login with Telegram</Button><br />
                        <Button className='mt-1'>Login with Google Account</Button>
                    </card.CardContent>
                </card.Card>
            </div>
        </div>
    )
}

export default LoginPage