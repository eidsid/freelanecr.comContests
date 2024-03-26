import Link from "next/link";
import React from "react";

const SubscribtionNotificationShow = ({ setSubscribtionNotification }) => {
  return (
    <div className="flex justify-between text-xs h-6">
      <span className="opacity-60">
        Subscribe to Pro and get Claude 3 Opus, our most inteligent model
      </span>
      <div className="flex gap-2 items-center">
        <Link
          href="subscribePage"
          className="text-purple-800 font-bold text-sm"
        >
          Subscribe to Pro
        </Link>
        <button
          className="opacity-50"
          onClick={() => setSubscribtionNotification(false)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default SubscribtionNotificationShow;
