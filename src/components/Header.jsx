import React from "react";
export default function Header() {
  return (
    <div className="flex p-5 px-16 justify-between shadow-md bg-white">
      <h1 className="font-extrabold text-xl">Where in the world?</h1>
      <button
        className="flex items-center font-semibold text-slate-800 gap-2"
        type="button"
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278zM4.858 1.311A7.269 7.269 0 001.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 005.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
        </svg>
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278z" />
        </svg>
        Dark Mode
      </button>
    </div>
  );
}
