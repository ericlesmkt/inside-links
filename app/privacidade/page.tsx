import Link from "next/link";

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-[#f0f2f5] p-6 font-sans flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mt-10 h-fit">
        <h1 className="text-2xl font-bold text-[#111b21] mb-6">Política de Privacidade</h1>
        
        <div className="space-y-4 text-sm text-[#667781] leading-relaxed">
          <p><strong>1. Coleta Direta de Dados</strong></p>
          <p>A sua privacidade é importante para nós. Esta página de destino não possui formulários e não coleta ativamente dados pessoais identificáveis, como nome, endereço de e-mail ou número de telefone.</p>

          <p><strong>2. Uso de Cookies e Pixels</strong></p>
          <p>Para otimizar nossas campanhas de publicidade e entender como os usuários interagem com esta página, utilizamos tecnologias de rastreamento padronizadas pela indústria, como Cookies e Pixels de conversão (ex: Pixel da Meta/Facebook e Google Analytics). Esses códigos coletam dados anônimos de navegação.</p>

          <p><strong>3. Compartilhamento de Informações</strong></p>
          <p>Não vendemos ou alugamos nenhuma informação de navegação para terceiros. Os dados capturados pelos Pixels são processados diretamente pelas plataformas de anúncios exclusivamente para métricas de desempenho.</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href="/" className="text-[#25D366] font-semibold hover:underline">
            &larr; Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}