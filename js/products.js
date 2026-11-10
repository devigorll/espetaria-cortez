/* Configurações comerciais e catálogo. Edite aqui para mudar loja, preços e produtos. */
window.TDT = window.TDT || {};
TDT.CONFIG = {
  storeName: "Espetaria Cortez",
  address: "Rua Eritréia, 49",
  neighborhood: "", // preencher quando disponível
  city: "",         // preencher quando disponível
  hours: "Segunda a sábado, das 09h às 19h",
  openDays: [1, 2, 3, 4, 5, 6], openHour: 9, closeHour: 19,
  whatsappLink: "https://wa.me/5511962441229", // contato geral (botões "Fale conosco", flutuante e rodapé)
  whatsappPhone: "5511962441229" // +55 11 96244-1229 (só dígitos): envia o pedido já preenchido
};
TDT.CATEGORIES = [
  { id: "batatas", name: "Batatas", image: "assets/images/categories/batatas.jpg" },
  { id: "espetinhos", name: "Espetinhos e Porções", image: "assets/images/categories/espetinhos.jpg" },
  { id: "cervejas", name: "Cervejas", image: "assets/images/categories/cervejas.jpg" },
  { id: "refri", name: "Refrigerantes e Sucos", image: "assets/images/categories/refri.jpg" }
];
/* price: null = "Preço a definir" (não pode ser adicionado ao carrinho). tags: "popular" | "new" | "promo". */
TDT.PRODUCTS = [
  { id: "batata-frita-recheada", category: "batatas", name: "Batata Frita Recheada", description: "Batata frita com recheio.", price: 30.00, image: "assets/images/products/batata-frita-recheada.jpg", tags: [] },
  { id: "batata-pote-calabresa", category: "batatas", name: "Batata no Pote - Calabresa", description: "Batata cremosa com calabresa. Acompanha cheddar, requeijão, mussarela, milho e bacon.", price: 20.00, image: "assets/images/products/batata-pote-calabresa.jpg", tags: [] },
  { id: "batata-pote-strogonoff", category: "batatas", name: "Batata no Pote - Strogonoff", description: "Batata cremosa com strogonoff de frango. Acompanha cheddar, requeijão, mussarela, milho e bacon.", price: 20.00, image: "assets/images/products/batata-pote-strogonoff.jpg", tags: [] },
  { id: "batata-pote-carne-moida", category: "batatas", name: "Batata no Pote - Carne Moída", description: "Batata cremosa com carne moída. Acompanha cheddar, requeijão, mussarela, milho e bacon.", price: 20.00, image: "assets/images/products/batata-pote-carne-moida.jpg", tags: [] },
  { id: "espetinho-carne", category: "espetinhos", name: "Espetinho de Carne", description: "Espetinho de carne.", price: 10.00, image: "assets/images/products/espetinho-carne.jpg", tags: [] },
  { id: "espetinho-frango", category: "espetinhos", name: "Espetinho de Frango", description: "Espetinho de frango.", price: 10.00, image: "assets/images/products/espetinho-frango.jpg", tags: [] },
  { id: "espetinho-linguica", category: "espetinhos", name: "Espetinho de Linguiça", description: "Espetinho de linguiça.", price: 10.00, image: "assets/images/products/espetinho-linguica.jpg", tags: [] },
  { id: "espetinho-misto", category: "espetinhos", name: "Espetinho Misto", description: "Espetinho misto.", price: 10.00, image: "assets/images/products/espetinho-misto.jpg", tags: [] },
  { id: "porcao-calabresa", category: "espetinhos", name: "Porção de Calabresa", description: "Porção de calabresa.", price: 30.00, image: "assets/images/products/porcao-calabresa.jpg", tags: [] },
  { id: "cachorro-quente", category: "espetinhos", name: "Cachorro-Quente", description: "Cachorro-quente.", price: 10.00, image: "assets/images/products/cachorro-quente.jpg", tags: [] },
  { id: "coxinha", category: "espetinhos", name: "Coxinha", description: "Salgado de frango.", price: 4.00, image: "assets/images/products/coxinha.jpg", tags: [] },
  { id: "bolinho-carne", category: "espetinhos", name: "Bolinho de Carne", description: "Salgado de carne.", price: 4.00, image: "assets/images/products/bolinho-carne.jpg", tags: [] },
  { id: "risole", category: "espetinhos", name: "Risóleis de Presunto e Queijo", description: "Salgado de presunto e queijo.", price: null, image: "assets/images/products/risole.jpg", tags: [] },
  { id: "enroladinho-salsicha", category: "espetinhos", name: "Enroladinho de Salsicha", description: "Salgado de salsicha.", price: null, image: "assets/images/products/enroladinho-salsicha.jpg", tags: [] },
  { id: "skol-550-ml", category: "cervejas", name: "Skol (550 ml)", description: "Cerveja, 550 ml.", price: 8.00, image: "assets/images/products/skol-550-ml.jpg", tags: [] },
  { id: "amstel-lager-350-ml", category: "cervejas", name: "Amstel Lager (350 ml)", description: "Cerveja, 350 ml.", price: 6.00, image: "assets/images/products/amstel-lager-350-ml.jpg", tags: [] },
  { id: "budweiser-350-ml", category: "cervejas", name: "Budweiser (350 ml)", description: "Cerveja, 350 ml.", price: 6.00, image: "assets/images/products/budweiser-350-ml.jpg", tags: [] },
  { id: "imperio-350-ml", category: "cervejas", name: "Império (350 ml)", description: "Cerveja, 350 ml.", price: 6.00, image: "assets/images/products/imperio-350-ml.jpg", tags: [] },
  { id: "original-269-ml", category: "cervejas", name: "Original (269 ml)", description: "Cerveja, 269 ml.", price: 6.00, image: "assets/images/products/original-269-ml.jpg", tags: [] },
  { id: "brahma-350-ml", category: "cervejas", name: "Brahma (350 ml)", description: "Cerveja, 350 ml.", price: 5.00, image: "assets/images/products/brahma-350-ml.jpg", tags: [] },
  { id: "brahma-duplo-malte-269-ml", category: "cervejas", name: "Brahma Duplo Malte (269 ml)", description: "Cerveja, 269 ml.", price: 5.00, image: "assets/images/products/brahma-duplo-malte-269-ml.jpg", tags: [] },
  { id: "itaipava-350-ml", category: "cervejas", name: "Itaipava (350 ml)", description: "Cerveja, 350 ml.", price: 5.00, image: "assets/images/products/itaipava-350-ml.jpg", tags: [] },
  { id: "skol-269-ml", category: "cervejas", name: "Skol (269 ml)", description: "Cerveja, 269 ml.", price: 5.00, image: "assets/images/products/skol-269-ml.jpg", tags: [] },
  { id: "coca-cola-600-ml", category: "refri", name: "Coca-Cola (600 ml)", description: "Refrigerante, 600 ml.", price: 8.00, image: "assets/images/products/coca-cola-600-ml.jpg", tags: [] },
  { id: "fanta-laranja-600-ml", category: "refri", name: "Fanta Laranja (600 ml)", description: "Refrigerante, 600 ml.", price: 8.00, image: "assets/images/products/fanta-laranja-600-ml.jpg", tags: [] },
  { id: "pepsi-600-ml", category: "refri", name: "Pepsi (600 ml)", description: "Refrigerante, 600 ml.", price: 8.00, image: "assets/images/products/pepsi-600-ml.jpg", tags: [] },
  { id: "sprite-600-ml", category: "refri", name: "Sprite (600 ml)", description: "Refrigerante, 600 ml.", price: 8.00, image: "assets/images/products/sprite-600-ml.jpg", tags: [] },
  { id: "coca-cola-lata-310-ml", category: "refri", name: "Coca-Cola Lata (310 ml)", description: "Refrigerante, 310 ml.", price: 6.00, image: "assets/images/products/coca-cola-lata-310-ml.jpg", tags: [] },
  { id: "del-valle-uva-450-ml", category: "refri", name: "Del Valle Uva (450 ml)", description: "Suco, 450 ml.", price: 5.00, image: "assets/images/products/del-valle-uva-450-ml.jpg", tags: [] },
  { id: "guarana-antarctica-350-ml", category: "refri", name: "Guaraná Antarctica (350 ml)", description: "Refrigerante, 350 ml.", price: 5.00, image: "assets/images/products/guarana-antarctica-350-ml.jpg", tags: [] },
  { id: "pepsi-350-ml", category: "refri", name: "Pepsi (350 ml)", description: "Refrigerante, 350 ml.", price: 5.00, image: "assets/images/products/pepsi-350-ml.jpg", tags: [] },
  { id: "sukita-laranja-350-ml", category: "refri", name: "Sukita Laranja (350 ml)", description: "Refrigerante, 350 ml.", price: 5.00, image: "assets/images/products/sukita-laranja-350-ml.jpg", tags: [] },
  { id: "sukita-uva-350-ml", category: "refri", name: "Sukita Uva (350 ml)", description: "Refrigerante, 350 ml.", price: 5.00, image: "assets/images/products/sukita-uva-350-ml.jpg", tags: [] },
  { id: "coca-cola-220-ml", category: "refri", name: "Coca-Cola (220 ml)", description: "Refrigerante, 220 ml.", price: 5.00, image: "assets/images/products/coca-cola-220-ml.jpg", tags: [] },
  { id: "coca-cola-200-ml", category: "refri", name: "Coca-Cola (200 ml)", description: "Refrigerante, 200 ml.", price: 3.00, image: "assets/images/products/coca-cola-200-ml.jpg", tags: [] },
  { id: "fanta-guarana-200-ml", category: "refri", name: "Fanta Guaraná (200 ml)", description: "Refrigerante, 200 ml.", price: 3.00, image: "assets/images/products/fanta-guarana-200-ml.jpg", tags: [] },
  { id: "fanta-laranja-200-ml", category: "refri", name: "Fanta Laranja (200 ml)", description: "Refrigerante, 200 ml.", price: 3.00, image: "assets/images/products/fanta-laranja-200-ml.jpg", tags: [] },
  { id: "guarana-antarctica-200-ml", category: "refri", name: "Guaraná Antarctica (200 ml)", description: "Refrigerante, 200 ml.", price: 3.00, image: "assets/images/products/guarana-antarctica-200-ml.jpg", tags: [] },
  { id: "sprite-200-ml", category: "refri", name: "Sprite (200 ml)", description: "Refrigerante, 200 ml.", price: 3.00, image: "assets/images/products/sprite-200-ml.jpg", tags: [] },
  { id: "sukita-uva-200-ml", category: "refri", name: "Sukita Uva (200 ml)", description: "Refrigerante, 200 ml.", price: 3.00, image: "assets/images/products/sukita-uva-200-ml.jpg", tags: [] }
];

/* Fotos reais do estabelecimento (carrossel de "Sobre nós").
   Coloque os arquivos em assets/images/estabelecimento/ e liste aqui. Vazio = carrossel oculto. */
TDT.GALLERY = [
  { src: "assets/images/estabelecimento/fachada.jpg", alt: "Fachada da Espetaria Cortez, com letreiro acima da entrada e toldo cinza" },
  { src: "assets/images/estabelecimento/interior-balcao.jpg", alt: "Interior da loja: balcão com vitrine de salgados e geladeira" },
  { src: "assets/images/estabelecimento/interior-cozinha.jpg", alt: "Interior da loja: área de preparo com bancada e forno" },
  { src: "assets/images/estabelecimento/interior-vitrine.jpg", alt: "Interior da loja: vitrine e geladeira de bebidas" }
];