import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">Welcome to FBAppInc – Your Guide to Black-Owned Businesses Nationwide</h1>
        <p className="text-lg text-center sm:text-left">
          FBAppInc is more than just a directory—it’s a movement to uplift and connect Black-owned businesses with customers looking to support them. Whether you're searching for a local restaurant, a trusted service provider, or a unique boutique, our platform makes it easy to discover and engage with Black-owned businesses across the country, organized by state and city.
        </p>
        <h2 className="text-2xl font-semibold">Why Join FBAppInc?</h2>
        <ul className="list-disc pl-5">
          <li>✅ <strong>Get Discovered</strong> – Your business will be featured in an easy-to-navigate directory.</li>
          <li>✅ <strong>Increase Visibility</strong> – Stand out with a dedicated business profile.</li>
          <li>✅ <strong>Connect with Your Audience</strong> – Engage with customers who are intentionally looking to support Black-owned businesses.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Exclusive Early Access Offer!</h2>
        <p>
          We’re offering an introductory rate for businesses that sign up early! By committing before <strong>June 1</strong>, you’ll receive <strong>$25 off</strong> your registration fee and ensure your business is <strong>uploaded and visible on release day</strong>. Learn more about this <a href="#" className="text-blue-600 underline">limited-time offer</a>.
        </p>
        <h2 className="text-2xl font-semibold">What’s Next? Exciting Future Features!</h2>
        <ul className="list-disc pl-5">
          <li>🎉 <strong>Exclusive Events</strong> – Networking opportunities, business expos, and community gatherings.</li>
          <li>📹 <strong>Video Reviews</strong> – Customers will be able to share video testimonials to boost engagement.</li>
          <li>🎁 <strong>Giveaways & Promotions</strong> – Special deals and promotions to drive more customers to your business.</li>
          <li>🌟 <strong>Special Guests & Spotlights</strong> – Industry leaders, influencers, and community voices sharing insights.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Be Part of the Movement</h2>
        <p>
          Join today and help build a platform dedicated to celebrating, supporting, and growing Black-owned businesses.
        </p>
        <p className="text-center sm:text-left">
          🔗 <a href="http://FBAppInc.com" className="text-blue-600 underline">Sign up now at FBAppInc.com</a>
        </p>
        <p className="text-center sm:text-left">
          📩 <a href="mailto:FBAppInc@gmail.com" className="text-blue-600 underline">Email us at FBAppInc@gmail.com</a>
        </p>
        <p className="text-center sm:text-left">
          📞 Call/Text (313) 880-9792
        </p>
      </main>
    </div>
  );
}