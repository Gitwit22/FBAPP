import Image from "next/image";

export default function BuyersPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">Welcome to FBAppInc – Your Guide to Black-Owned Businesses Nationwide</h1>
        <p className="text-lg text-center sm:text-left">
          FBAppInc is more than just a directory—it’s a movement to uplift and connect Black-owned businesses with customers looking to support them. Whether you're searching for a local restaurant, a trusted service provider, or a unique boutique, our platform makes it easy to discover and engage with Black-owned businesses across the country, organized by state and city.
        </p>
        <h2 className="text-2xl font-semibold">Why Use FBAppInc?</h2>
        <ul className="list-disc pl-5">
          <li>✅ <strong>Discover Black-Owned Businesses</strong> – Easily find businesses by state and city.</li>
          <li>✅ <strong>Support the Community</strong> – Help Black entrepreneurs thrive by shopping consciously.</li>
          <li>✅ <strong>Access Exclusive Content</strong> – Get updates on events, giveaways, and business spotlights.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Launch & Pricing</h2>
        <p>
          FBAppInc launches on <strong>Juneteenth</strong> for an introductory price of <strong>$1</strong>. After two weeks, the price will increase to <strong>$5</strong>. Get in early and start exploring Black-owned businesses near you!
        </p>
        <h2 className="text-2xl font-semibold">Exciting Future Features!</h2>
        <ul className="list-disc pl-5">
          <li>🎉 <strong>Exclusive Events</strong> – Networking opportunities, business expos, and community gatherings.</li>
          <li>📹 <strong>Video Reviews</strong> – See firsthand experiences from other users.</li>
          <li>🎁 <strong>Giveaways & Promotions</strong> – Win prizes and access special deals.</li>
          <li>🌟 <strong>Special Guests & Spotlights</strong> – Hear from industry leaders and influencers.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Be Part of the Movement</h2>
        <p>
          Download FBAppInc on **Juneteenth** and be part of a growing community dedicated to supporting Black-owned businesses!
        </p>
        <p className="text-center sm:text-left">
          🔗 <a href="http://FBAppInc.com" className="text-blue-600 underline">Visit FBAppInc.com</a>
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
