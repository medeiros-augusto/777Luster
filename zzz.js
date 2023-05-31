var products = [
    { name: 'Produto 1', description: 'Descrição do Produto 1', category: 'smartphone' },
    { name: 'Produto 2', description: 'Descrição do Produto 2', category: 'computadores' },
    { name: 'Produto 3', description: 'Descrição do Produto 3', category: 'consoles' },
    { name: 'Produto 4', description: 'Descrição do Produto 4', category: 'acessorios' },
    { name: 'Produto 5', description: 'Descrição do Produto 5', category: 'smartphone' },
    { name: 'Produto 6', description: 'Descrição do Produto 6', category: 'computadores' },
    { name: 'Produto 7', description: 'Descrição do Produto 7', category: 'consoles' },
    { name: 'Produto 8', description: 'Descrição do Produto 8', category: 'acessorios' },
    { name: 'Produto 9', description: 'Descrição do Produto 9', category: 'smartphone' },
    { name: 'Produto 10', description: 'Descrição do Produto 10', category: 'computadores' },
    { name: 'Produto 11', description: 'Descrição do Produto 11', category: 'consoles' },
    { name: 'Produto 12', description: 'Descrição do Produto 12', category: 'acessorios' },
    { name: 'Produto 13', description: 'Descrição do Produto 13', category: 'smartphone' },
    { name: 'Produto 14', description: 'Descrição do Produto 14', category: 'computadores' },
    { name: 'Produto 15', description: 'Descrição do Produto 15', category: 'consoles' },
    { name: 'Produto 16', description: 'Descrição do Produto 16', category: 'acessorios' },
    { name: 'Produto 17', description: 'Descrição do Produto 17', category: 'smartphone' },
    { name: 'Produto 18', description: 'Descrição do Produto 18', category: 'computadores' },
    { name: 'Produto 19', description: 'Descrição do Produto 19', category: 'consoles' },
    { name: 'Produto 20', description: 'Descrição do Produto 20', category: 'acessorios' },
    { name: 'Produto 21', description: 'Descrição do Produto 21', category: 'smartphone' },
    { name: 'Produto 22', description: 'Descrição do Produto 22', category: 'computadores' },
    { name: 'Produto 23', description: 'Descrição do Produto 23', category: 'consoles' },
    { name: 'Produto 24', description: 'Descrição do Produto 24', category: 'acessorios' }
  ];
  
  var categoryDropdown = document.getElementById('dropdown');
  var dropdownItems = document.getElementById('dropdownItems');
  var productsContainer = document.getElementById('productsContainer');
  
  function showDropdown() {
    dropdownItems.style.display = 'block';
  }
  
  function hideDropdown() {
    dropdownItems.style.display = 'none';
  }
  
  function filterProductsByCategory(category) {
    return products.filter(function(product) {
      return product.category === category;
    });
  }
  
  function selectCategory(category) {
    categoryDropdown.value = category;
    showProducts();
    hideDropdown();
  }
  
  function showProducts() {
    var selectedCategory = categoryDropdown.value;
    var filteredProducts = filterProductsByCategory(selectedCategory);
    productsContainer.innerHTML = '';
  
    filteredProducts.forEach(function(product) {
      var productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      var productName = document.createElement('h2');
      productName.textContent = product.name;
  
      var productDescription = document.createElement('p');
      productDescription.textContent = product.description;
  
      productCard.appendChild(productName);
      productCard.appendChild(productDescription);
  
      productsContainer.appendChild(productCard);
    });
  }
  
  categoryDropdown.addEventListener('change', function() {
    showProducts();
  });
  