# MITE Suplementos — pacote de SEO

Este pacote substitui os principais arquivos do projeto atual e foi preparado
para o domínio oficial `https://mitesuplementos.com.br`.

## O que foi corrigido

- Canonical sem `www` e redirecionamento permanente da versão com `www`.
- Título, descrição e H1 voltados a buscas locais em Fortaleza e Eusébio.
- `robots.txt` e `sitemap.xml` gerados pelo App Router.
- Dados estruturados `OnlineStore` e `WebSite`, sem inventar endereço físico.
- Imagens sociais Open Graph e Twitter geradas em 1200 × 630.
- Página principal renderizada no servidor; apenas menu, formulário e eventos
  usam JavaScript no navegador.
- Google Analytics carregado uma única vez.
- Eventos para contatos pelo WhatsApp, produtos e Instagram.
- Depoimentos fictícios removidos.
- Promessas de resultado e linguagem de prescrição removidas.
- Orientação descrita corretamente como atendimento comercial.
- Conteúdo verificável sobre entrega grátis em Fortaleza e Eusébio.
- Formulário sem armazenamento de telefone, e-mail ou objetivo no navegador.
- Menu mobile, semântica, navegação por teclado e links corrigidos.
- Atualização para Next.js 16.3 e React 19.2.

## Como aplicar

1. Faça uma cópia de segurança ou crie uma branch no GitHub.
2. Substitua as pastas e arquivos correspondentes pelos deste pacote.
3. Exclua o arquivo antigo `app/components/Analytics.tsx`.
4. Mantenha em `public/images` os arquivos existentes:
   `logo.svg`, `logomite.jpg` e `consultoria-bg.jpg`.
5. Confirme que a Vercel usa Node.js 20.9 ou superior.
6. Execute:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

7. Na Vercel, defina `mitesuplementos.com.br` como domínio principal e faça a
   versão `www` redirecionar para ele.
8. Depois de publicar, abra:
   - `https://mitesuplementos.com.br/robots.txt`
   - `https://mitesuplementos.com.br/sitemap.xml`
9. No Google Search Console, cadastre a propriedade do domínio, envie
   `https://mitesuplementos.com.br/sitemap.xml` e solicite nova indexação da home.
10. No GA4 em tempo real, confirme que cada abertura da página gera apenas um
    evento `page_view`.

Antes da publicação definitiva, providencie uma política de privacidade e
avalie, com orientação jurídica adequada ao negócio, a necessidade de um aviso
ou mecanismo de consentimento para o Google Analytics.

## Informações comerciais aplicadas

- Telefone e WhatsApp: `(85) 98935-1762`.
- E-mail: `mitesuplementos@gmail.com`.
- Operação exclusivamente on-line.
- Entrega grátis em Fortaleza e Eusébio.
- Creatina Max Titanium 300 g: R$ 89,90.
- Creatina Integralmédica 300 g: R$ 89,90.
- Caniblend 900 g: R$ 99,90.
- Caniblend nos sabores chocolate, morango e baunilha.

Atualize preço, sabor e disponibilidade no `app/page.tsx` sempre que o estoque
mudar. Não adicione dados estruturados de avaliações sem avaliações reais e
autorizadas.
