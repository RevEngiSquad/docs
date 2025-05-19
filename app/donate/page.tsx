import Link from "next/link";

export default function DonatePage() {
    return (
        <div className="container mx-auto px-4 py-8">
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
                                <code className="block p-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">0x97b5122FF1eA32139693C5221C83fe9c6D7298D3</code>
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
                    <li>If you're sending via Crypto, ensure you're sending to the correct address & consider Network Fees.</li>
                </ul>
            </section>
        </div>
    );
}
