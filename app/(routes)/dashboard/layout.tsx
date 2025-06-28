import React from 'react';
import AppHeader from './_components/AppHeader';

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-white via-cyan-50 to-blue-100 dark:from-neutral-950 dark:via-cyan-950 dark:to-black relative">
      
      {/* Blurred Medical Background Blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-300 opacity-30 blur-3xl dark:bg-cyan-800" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-200 opacity-20 blur-2xl dark:bg-blue-900" />

      {/* Decorative Vertical and Bottom Lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      {/* Actual Page Content */}
      <div className="relative z-10">
        <AppHeader />
        <div className="px-4 py-10 md:px-20 lg:px-40">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
