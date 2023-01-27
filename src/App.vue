<template>
  <header>
    <div class="container mx-auto">
      <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">ABO</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Sobre</a></li>
          <li><a>Trabalhos</a></li>
          <li><a>Contato</a></li>
        </ul>
      </div>
    </div>
    </div>
  </header>

  <main>
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-8">
        <div class="bg-blue-100 rounded-3xl p-4 h-50 col-span-2 bg-multigradient">
          <div class="p-4">
            <div class="w-45 w-700">
              <h1 class="font-bold text-5xl md:text-6xl xl:text-6xl text-gray-700">Olá, eu sou o Luiz, um Desenvolvedor Web Full Stack com 2 anos de experiência</h1>
            </div>
            <div class="w-45 w-700 mt-8">
              <p class="text-black text-lg">Sou apaixonado em aprender mais sobre as diferentes etapas e tecnologias que envolvem o desenvolvimento de software.  Gosto do desafio do Backend e da diversão que é trabalhar com Front-End .</p>
            </div>
            <div class="mt-20 flex">
              <div>
                <button class="btn rounded-full">Me chame! 📞</button>
              </div>
              <div class="px-2">
                <button class="btn btn-ghost btn-circle bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </button>
              </div>
              <div class="px-2">
                <button class="btn btn-ghost btn-circle bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
                </button>
              </div>
              <div class="px-2">
                <button class="btn btn-ghost btn-circle bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-3xl p-4 h-50 bg-luiz bg-cover"></div>
      </div>
    </div>

    <div class="container mx-auto">
      <h1 class="font-bold text-3xl text-gray-100 mt-8 mb-4">Projetos Pessoais</h1>
    </div>
    <div class="pt-8 container mx-auto grid grid-cols-4 gap-8">
      <div class="rounded-3xl h-50 bg-blue-900" style="height: 450px;">
        <div class="p-5">
          <h2 class="font-bold text-3xl">Control For Fair</h2>
          <p>Crud simples simulando o funcionamento de uma feira.</p>
        </div>
        <div class="p-4">
          <img class="rounded-3xl" style="height: 320px;" src="./images/control-for-fair.png" alt="">
        </div>
      </div>
      <div class="rounded-3xl h-50 bg-blue-200">2</div>
      <div class="rounded-3xl h-50 bg-blue-300">3</div>
      <div class="rounded-3xl h-50 bg-blue-300">3</div>
    </div>
  </main>
</template>

<style>

</style>
