import { internalHref } from "@/lib/site-path";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FFFAF3] px-6 text-[#1F2526]">
      <main className="max-w-md border border-[#D8CEC2] bg-white p-10 text-center shadow-sm">
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#A37E4B]">Página não encontrada</p>
        <h1 className="mt-3 font-serif text-5xl text-[#5B1F2A]">404</h1>
        <p className="mt-4 font-sans text-sm leading-6">O endereço informado não corresponde a uma página deste site.</p>
        <a className="mt-7 inline-flex bg-[#5B1F2A] px-5 py-3 font-sans text-sm font-semibold text-white" href={internalHref("/")}>
          Voltar ao início
        </a>
      </main>
    </div>
  );
}
