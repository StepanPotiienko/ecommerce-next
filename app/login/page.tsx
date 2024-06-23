
import * as card from '@/components/ui/card'
import { Button } from '@/components/ui/button'


import { Header } from '../page'


const LoginPage = () => {
    return (
        <div>
            <Header />
            {/* Here goes the login stuff */}
            <card.Card>
                <Button>Login with Telegram</Button>
            </card.Card>
        </div>
    )
}

export default LoginPage