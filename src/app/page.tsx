import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background" suppressHydrationWarning>
      <header className="border-b border-slate-200/60">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-5">
          <Image
            src="/logo.svg"
            alt="Авангард Строй"
            width={588}
            height={555}
            className="h-8 w-auto"
            priority
          />
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <span className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
          Скоро запуск
        </span>

        <h1 className="text-3xl font-bold text-brand-primary md:text-4xl">
          Личный кабинет в разработке
        </h1>

        <p className="mt-4 text-brand-muted">
          Страница скоро будет доступна.
        </p>
      </main>

      <footer className="mt-auto border-t border-slate-200/60">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-brand-muted">
          © {new Date().getFullYear()} Авангард Строй
        </div>
      </footer>
    </div>
  );
}
