import Link from "next/link";

export default function DonatePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-8 p-6 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-700">
                <h2 className="text-2xl font-bold mb-2 flex items-center">💖 Help Keep RevEngiBot Free for Everyone</h2>
                <p className="mb-3">We started RevEngiBot with one goal: to make powerful reverse engineering tools—often locked behind paywalls by other tools we all used—freely accessible to everyone, not to make a profit.</p>
                <p className="mb-3">Our monthly server cost is just <span className="font-semibold">$20</span>. If only 20 people pitch in $1 each, we can hit that target together.<br />No fancy subscriptions. No tiered limits. Just a shared goal.</p>
                <div className="mb-3">
                    <h3 className="font-semibold mb-1">🎯 How It Works:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>If we reach our $20 monthly goal, we’ll remove all usage restrictions for everyone—regardless of how much you donated.</li>
                        <li>If we don’t reach the goal, usage will continue as it is, with current file size limits.</li>
                    </ul>
                </div>
                <div className="mb-3">
                    <h3 className="font-semibold mb-1">💵 How to Support:</h3>
                    <p>Donate any amount (minimum $1) and help us hit our monthly target.</p>
                </div>
                <p className="mb-3">📝 After donating, send your transaction ID or screenshot to <a href="https://t.me/RevEngiSupportBot" className="text-blue-500 hover:underline">@RevEngiSupportBot</a> or email it to <a href="mailto:support@revengi.in" className="text-blue-500 hover:underline">support@revengi.in</a>.</p>
                <p className="mb-3">It’s not about how much you give, it’s about showing up. If we all chip in, everyone benefits.</p>
                <p className="mb-3 font-semibold">Let’s make this truly free, together. ❤️</p>
            </section>

            <h1 className="text-3xl font-bold mb-6">Support Us</h1>

            <section className="mb-8">
                <p className="mb-4">
                    While RevEngiBot and RevEngi API remains largely free to use, we’ve introduced some file size limits to manage our server load. As a small team, we don’t profit from this project—but we do rely on community support to keep it running. To help sustain and improve RevEngiBot, we offer premium subscriptions that remove these restrictions and fund our dedicated cloud hosting. Your support enables us to maintain the service and develop even more powerful features!
                </p>
                <p className="mb-4">
                    Instead of paywalls, we prefer to <em>reward</em> those who support us by increasing their usage limits ❤️.
                    If you'd like to contribute, simply donate any amount and let us know, we'll be happy to extend your access accordingly!
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">📬 Payment Methods</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">Patreon</h3>
                        <p>Select your appropriate plan and send the payment using the link below.</p>
                        <a href="https://www.patreon.com/abhithemodder/shop"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer">
                            Click Here
                        </a>
                    </div>

                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">Binance Pay [No Network Fees]</h3>
                        <p>Select your appropriate plan and send the payment to below Binance ID [Only USDT].</p>
                        <code className="block p-2 bg-gray-200 dark:bg-gray-700 rounded mt-2">570920434</code>
                    </div>

                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">Crypto Payments</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="font-medium">USDT (TRC-20)</p>
                                <code className="block p-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">TTZwdQSKwfN5jDhh95FTij3AE7RnEsovz4</code>
                            </div>
                            <div>
                                <p className="font-medium">USDT (BEP 20)</p>
                                <code className="block p-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">0x85588e07617eac195b98c6b76d5d45c4ce32d531</code>
                            </div>
                            <div>
                                <p className="font-medium">BTC (BITCOIN)</p>
                                <code className="block p-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">bc1qqq0gcdp2quvuhed8kv8lpdhrdkej32lpu0wrsd</code>
                            </div>
                            <div>
                                <p className="font-medium">ETH (ERC 20)</p>
                                <code className="block p-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">0x97b5122FF1eA32139693C5221C83fe9c6D7298D3</code>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">UPI</h3>
                        <code className="block p-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">smishra247@airtel</code>
                    </div>
                </div>
            </section>

            <section className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">📝 Important Notes:</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Don't forget to send us the transaction ID or Screenshot to <a href="https://t.me/RevEngiSupportBot" className="text-blue-500 hover:underline">@RevEngiSupportBot</a> (In case you don't get a reply within 24hrs don't forget to report us at our <a href="/contact" className="text-blue-500 hover:underline">Telegram support </a> group) with your Account/UserID to confirm your payment.</li>
                    <li>Alternatively, you can email the screenshot to <a href="mailto:support@revengi.in" className="text-blue-500 hover:underline">support@revengi.in</a>.</li>
                    <li>If you're sending via Crypto, ensure you're sending to the correct address & consider Network Fees.</li>
                </ul>
            </section>
        </div>
    );
}
