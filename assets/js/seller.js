  
  
  const tabs  = document.querySelectorAll('[data-target]');
  const tabContents = document.querySelectorAll('[content]');
  
    tabs.forEach((tab) => {
      tab.addEventListener('click' , () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach((tabContent) => {
          tabContent.classList.remove('active-tab')
        })
        target.classList.add('active-tab')
  
        tabs.forEach((tabs) => {
          tabs.classList.remove('active-tab')
        })
  
        tab.classList.add('active-tab')
  
      })
      })
  
  
  function createTemplateCategory(arrayCategory) {
  
    let containerCategory = document.querySelector('.container-category')
  
    containerCategory.innerHTML = ''
    
    arrayCategory.forEach(array => {
  
      let nameFilters ;
      array.filters.forEach(item => {
        nameFilters += `<p>${item.name}</p>`
      })
  
  
      containerCategory.insertAdjacentHTML('beforeend' , `
      <div class="col-md-4  g-3 text-center">
      <div class="card text-center" style="height: 13rem; overflow: scroll;">
          <img class="card-img-top" src="${array.imgadrs}" alt="تصویر بارگذاری نشد">
          <div class="card-body">
            <h5 class="card-title">${array.faName}</h5>
            <p class="card-text">${nameFilters}</p>
            <i class="bi bi-trash deleteCategory" onclick="deleteCategoryTemplate('${array._id}')"></i>
          </div>
        </div>
      </div>
      `)
    })
  }
  
  /////////////////////////////////////////////////
  // category - filters 
  
  let btnAddFilter = document.querySelector('.add-templateFilters')
  let templateFilters = document.querySelector('.filters-temp')
  
  btnAddFilter.addEventListener('click' , addTempFilters)
  
  function addTempFilters() {
    templateFilters.insertAdjacentHTML('beforeend' , `
    <div class="container-filters col-9 position-relative">
    <input type="text" required id="name" class="form-control rounded-3 filter-property" placeholder="ویژگی های فیلتر">
    <div class="col-md-5 gy-3">
        <i class="bi bi-trash3  delete-filters" onclick="deleteFilters(event)"></i>
    </div>
    </div>
    `)
  }
  
  function deleteFilters(e) {
    e.target.parentElement.parentElement.remove()
  }
  
  
  
  // add to dom
  
  let registerBtnFilters = document.querySelector('.btn-filters')
  let nameFilter = document.querySelector('.name-filter')
  
  registerBtnFilters.addEventListener('click' , addToDomFilters)
  
  let mainFilters = []
  function addToDomFilters () {
    
    let arrayPropertyFilter = []
    let propertyFilter ;
  
    document.querySelectorAll('.container-filters').forEach(parent => {
      propertyFilter = parent.children[0].value 
  
      arrayPropertyFilter.push(propertyFilter)
  
    })
    
    let objPropertyFilter = {
      name : nameFilter.value,
      col : arrayPropertyFilter
    }
    
    mainFilters.push(objPropertyFilter)
  
    addToDomForFIlter(objPropertyFilter)
  
    console.log(mainFilters);
  
  }
  
  
  function addToDomForFIlter(objPropertyFilter) {
  
    let containerAdded = document.querySelector('.container-filters-added')
  
    // containerAdded.innerHTML = ''
  
    objPropertyFilter.col.forEach(item => {
      containerAdded.insertAdjacentHTML('beforeend' , `
      <div class="col-md-2 col-5">
      <div class="card">
          <div class="card-body">
              <h6 class="card-title">${objPropertyFilter.name}</h6>
              <p class="card-text">${item}</p>
          </div>
      </div>
      </div>
      `)
    })
  
  }
  
  
  let finalCategoryBtn = document.querySelector('.Final-registration-category')
  
  
  //////////////////////////////////////////////////
  // brand 
  
  let addBtnBrand = document.querySelector('.Final-registration-brand')
  

  //////////////////////////////////////////////////
  /// get brand and category
  

  function addCategoryToDom(res) {
  
    let categorySelectInput = document.querySelector('.category-id')
  
    res.forEach(item => {
      categorySelectInput.insertAdjacentHTML('beforeend' , `
        <option class="option-item" value="${item._id}">${item.faName}</option>
      `)
    })
  
  }
  
  function addBrandToDom(res) {
    let brandSelectInput = document.querySelector('.brand-id-value')
    res.forEach(item => {
      brandSelectInput.insertAdjacentHTML('beforeend' , `
      <option class="option-item" value="${item._id}">${item.name}</option>
      `)
    })
  }
  
  //////////////////////////////////////////////////
  // slides
  
  let slidesBtn = document.querySelector('.slides-btn')
  
  slidesBtn.addEventListener('click' , () => {
    getAllSlides()
  })
  
  function addToDomSLides(res) {
    let slidesSelectInput = document.querySelector('.slides-id')
    res.forEach(item => {
      slidesSelectInput.insertAdjacentHTML('beforeend' , `
      <option class="option-item" value="${item._id}">${item.name}</option>
      `)
    })
  
  }
  
  let finalSLidesBtn = document.querySelector('.Final-registration-slides')
  
  ///////////////////////////////////////////////////
  // template slides
  
  
  //////////////////////////////////////////////////
  //Product registration
  
  
  
  
  
  
  // add template for property a
  let addTemplate = document.querySelector('.add-templateA')
  let templateContainer = document.querySelector('.propertyA-temp')
  
  addTemplate.addEventListener('click', () => {
    templateContainer.insertAdjacentHTML('beforeend' , `
    <div class="col-10 gy-3 position-relative container-template">
    <input type="text" id="name" required class="form-control rounded-3 name-property-a" placeholder="نام ویژگی">
    <input type="number" required id="name" class="form-control rounded-3 price-property-a" placeholder="مقدار افزایش قیمت (فقط عدد)">
    <i class="bi bi-trash3 delete-template" onclick="deleteTemp(event)"></i>
    </div>
    `)
  })
  
  function deleteTemp (e) {
    e.target.parentElement.remove()
  }
  
  
  /// btn for register property a
  let btnPropertyA = document.querySelector('.btn-property-a')
  let PropertyNameWithPrice = document.querySelector('.name-upPrice-property-a')
  
  btnPropertyA.addEventListener('click' , propertyA)
  
  let propertyMainArrayA = []
  function propertyA () {
  
    let nameProperty ;
    let priceProperty ;
    let ArrayPropertyA = []
  
    document.querySelectorAll('.container-template').forEach(parentElem => {
      nameProperty = parentElem.children[0].value
      priceProperty = parentElem.children[1].value
  
      let propertyForA = {
        n : String(nameProperty) ,
        pr : Number(priceProperty)
      }
  
      ArrayPropertyA.push(propertyForA)
  
    })
  
    
  
    let productObj = {
      name: String(PropertyNameWithPrice.value),
      property: ArrayPropertyA
    }
  
    propertyMainArrayA.push(productObj)
  
    addToDomA(productObj)
    
  }
  
  function addToDomA(productObj) {
    let containerA = document.querySelector('.container-property-a')
  
    // containerA.innerHTML = ''
  
    productObj.property.forEach(item => {
      containerA.insertAdjacentHTML('beforeend' , `
    <div class="col-md-2 col-5">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">${productObj.name}</h6>
          <p class="card-text">${item.n} - <span>${item.pr}</span></p>
        </div>
        <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
      </div>
    </div>
  `)
    })
    
  }
  
  
  
  // add template for property b
  
  let addTemplateB = document.querySelector('.add-templateB')
  let templateContainerB = document.querySelector('.propertyB-temp')
  
  addTemplateB.addEventListener('click', () => {
    templateContainerB.insertAdjacentHTML('beforeend' , `
      <div class="container-template-b col-9 position-relative">
      <input type="text" required id="name" class="form-control rounded-3 name-property-b" placeholder="عنوان ویژگی  در بخش کنار عکس محصول">
      
      <input type="text" required id="name" class="form-control rounded-3 caption-property-b" placeholder="توضیحات">
       
       <div class="col-md-5 gy-3">
           <i class="bi bi-trash3  delete-templateB" onclick="deleteTempB(event)"></i>
       </div>
        </div>
    `)
  })
  
  function deleteTempB(e) {
    e.target.parentElement.parentElement.remove()
  }
  
  
  // btn for register property b
  
  let btnPropertyB = document.querySelector('.btn-property-b')
  
  btnPropertyB.addEventListener('click' , propertyB)
  
  let ArrayPropertyB = []
  function propertyB () {
  
    let namePropertyB ;
    let capPropertyB ;
  
    document.querySelectorAll('.container-template-b').forEach(parentElem => {
      
      namePropertyB = parentElem.children[0].value
      capPropertyB = parentElem.children[1].value
  
      let propertyForB = {
        name : String(namePropertyB) ,
        cap : String(capPropertyB)
      }
  
      ArrayPropertyB.push(propertyForB)
  
    })
  
    addToDOmB(ArrayPropertyB)
  
    // return ArrayPropertyB
  
  }
  
  
  function addToDOmB(ArrayPropertyB) {
    let containerB = document.querySelector('.container-property-b')
  
    containerB.innerHTML = ''
  
    ArrayPropertyB.forEach(item => {
      containerB.insertAdjacentHTML('beforeend' , `
        <div class="col-md-4">
          <div class="card"  style="height: 7rem; overflow: scroll;">
            <div class="card-body">
              <h6 class="card-title">${item.name}</h6>
              <p class="card-text">${item.cap}</p>
            </div>
            <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
          </div>
        </div>
      `)
    })
  }
   
  
  // add template for property c
  
  let addTemplateC = document.querySelector('.add-templateC')
  let templateContainerC = document.querySelector('.propertyC-temp')
  
  addTemplateC.addEventListener('click', () => {
    templateContainerC.insertAdjacentHTML('beforeend' , `
    <div class="container-template-c col-9 position-relative">
                                          
      <input type="text" required id="name" class="form-control rounded-3 name-property-c" placeholder="عنوان ویژگی">
      <input type="text" id="name" required class="form-control rounded-3 caption-property-c" placeholder="توضیحات">
      <div class="col-md-5 gy-3">
        <i class="bi bi-trash3  delete-templateC" onclick="deleteTempC(event)"></i>
      </div>
  
    </div>
    `)
  })
  
  function deleteTempC(e) {
    e.target.parentElement.parentElement.remove()
  }
  
  
  // btn for register property c
  
  let btnPropertyC = document.querySelector('.btn-property-c')
  
  btnPropertyC.addEventListener('click' , propertyC)
  
  let ArrayPropertyC = []
  function propertyC () {
  
    let namePropertyC ;
    let capPropertyC ;
  
    document.querySelectorAll('.container-template-c').forEach(parentElem => {
      
      namePropertyC = parentElem.children[0].value
      capPropertyC = parentElem.children[1].value
  
      let propertyForC = {
        property3N1 : String(namePropertyC) ,
        propertyN2 : String(capPropertyC)
      }
  
      ArrayPropertyC.push(propertyForC)
  
    })
  
    addToDOmC(ArrayPropertyC)
  
    // return ArrayPropertyC
  
  }
  
  
  function addToDOmC(ArrayPropertyC) {
    let containerC = document.querySelector('.container-property-c')
  
    containerC.innerHTML = ''
  
    ArrayPropertyC.forEach(item => {
      containerC.insertAdjacentHTML('beforeend' , `
        <div class="col-md-4">
          <div class="card"  style="height: 7rem; overflow: scroll;">
            <div class="card-body">
              <h6 class="card-title">${item.property3N1}</h6>
              <p class="card-text">${item.propertyN2}</p>
            </div>
            <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
          </div>
        </div>
      `)
    })
  }
  
  
  // btn for colors template
  
  
  let addColors = document.querySelector('.add-colors')
  let templateColors = document.querySelector('.colors-temp')
  
  addColors.addEventListener('click', () => {
    templateColors.insertAdjacentHTML('beforeend' , `
      <div class="container-colors col-9 position-relative">
      <input type="text" required id="name" class="form-control rounded-3 name-colors" placeholder="اسم رنگ">
      <input type="text" required id="name" class="form-control rounded-3 code-colors" placeholder="کد رنگ(#)">
      <div class="col-md-5 gy-3">
          <i class="bi bi-trash3  delete-colors" onclick="deleteColors(event)"></i>
      </div>
      </div>
    `)
  })
  
  function deleteColors(e) {
    e.target.parentElement.parentElement.remove()
  }
  
  // btn for register colors
  
  
  let btnColors = document.querySelector('.btn-colors')
  
  btnColors.addEventListener('click' , colors)
  
  let ArrayColors = []
  function colors () {
  
    let nameColors ;
    let codeColors ;
  
    document.querySelectorAll('.container-colors').forEach(parentElem => {
      
      nameColors = parentElem.children[0].value
      codeColors = parentElem.children[1].value
  
      let propertyForColors = {
        colorName : String(nameColors) ,
        colorCode : String(codeColors)
      }
  
      ArrayColors.push(propertyForColors)
  
    })
  
    addToDOmColors(ArrayColors)
  
    // return ArrayColors
  }
  
  
  function addToDOmColors(ArrayColors) {
    let containerColors = document.querySelector('.container-property-colors')
  
    containerColors.innerHTML = ''
  
    ArrayColors.forEach(item => {
      containerColors.insertAdjacentHTML('beforeend' , `
      <div class="col-md-2 col-5">
      <div class="card">
          <div class="card-body">
              <h6 class="card-title">${item.colorName} - <span dir="ltr">${item.colorCode}</span></h6>
          </div>
          <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
      </div>
      </div>
      `)
    })
  }
  
  
  let FinalRegistration = document.querySelector('.Final-registration')
  

  /// btn for register property a
  let btnPropertyAModal = document.querySelector('.btn-property-a-modal')
  let PropertyNameWithPriceModal = document.querySelector('.name-upPrice-property-a-modal')
  
  btnPropertyAModal.addEventListener('click' , propertyAModal)
  
  let propertyMainArrayAModal = []
  function propertyAModal () {
  
    let nameProperty ;
    let priceProperty ;
    let ArrayPropertyA = []
  
    document.querySelectorAll('.container-template-modal').forEach(parentElem => {
      nameProperty = parentElem.children[0].value
      priceProperty = parentElem.children[1].value
  
      let propertyForA = {
        n : String(nameProperty) ,
        pr : Number(priceProperty)
      }
  
      ArrayPropertyA.push(propertyForA)
  
    })
  
    
  
    let productObj = {
      name: String(PropertyNameWithPriceModal.value),
      property: ArrayPropertyA
    }
  
    propertyMainArrayAModal.push(productObj)
  
    addToDomAModal(productObj)
    
  }
  
  
  function addToDomAModal(productObj) {
    let containerA = document.querySelector('.container-property-a-modal')
  
    // containerA.innerHTML = ''
  
    productObj.property.forEach(item => {
      containerA.insertAdjacentHTML('beforeend' , `
    <div class="col-md-2 col-5">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">${productObj.name}</h6>
          <p class="card-text">${item.n} - <span>${item.pr}</span></p>
        </div>
        <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
      </div>
    </div>
  `)
    })
    
  }
  
  
  
  // add template for property b
  
  let addTemplateBModal = document.querySelector('.add-templateB-modal')
  let templateContainerBModal = document.querySelector('.propertyB-temp-modal')
  
  addTemplateBModal.addEventListener('click', () => {
    templateContainerBModal.insertAdjacentHTML('beforeend' , `
      <div class="container-template-b col-9 position-relative">
      <input type="text" required id="name" class="form-control rounded-3 name-property-b" placeholder="عنوان ویژگی  در بخش کنار عکس محصول">
      
      <input type="text" required id="name" class="form-control rounded-3 caption-property-b" placeholder="توضیحات">
       
       <div class="col-md-5 gy-3">
           <i class="bi bi-trash3  delete-templateB" onclick="deleteTempB(event)"></i>
       </div>
        </div>
    `)
  })
  
  function deleteTempB(e) {
    e.target.parentElement.parentElement.remove()
  }
  
  
  // btn for register property b
  
  let btnPropertyBModal = document.querySelector('.btn-property-b-modal')
  
  btnPropertyBModal.addEventListener('click' , propertyBModal)
  
  let ArrayPropertyBModal = []
  function propertyBModal () {
  
    let namePropertyB ;
    let capPropertyB ;
  
    document.querySelectorAll('.container-template-b-modal').forEach(parentElem => {
      
      namePropertyB = parentElem.children[0].value
      capPropertyB = parentElem.children[1].value
  
      let propertyForB = {
        name : String(namePropertyB) ,
        cap : String(capPropertyB)
      }
  
      ArrayPropertyBModal.push(propertyForB)
  
    })
  
    addToDOmBModal(ArrayPropertyBModal)
  
    // return ArrayPropertyB
  
  }
  
  
  function addToDOmBModal(ArrayPropertyB) {
    let containerB = document.querySelector('.container-property-b-modal')
  
    containerB.innerHTML = ''
  
    ArrayPropertyB.forEach(item => {
      containerB.insertAdjacentHTML('beforeend' , `
        <div class="col-md-4">
          <div class="card"  style="height: 7rem; overflow: scroll;">
            <div class="card-body">
              <h6 class="card-title">${item.name}</h6>
              <p class="card-text">${item.cap}</p>
            </div>
            <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
          </div>
        </div>
      `)
    })
  }
   
  
  // add template for property c
  
  let addTemplateCModal = document.querySelector('.add-templateC-modal')
  let templateContainerCModal = document.querySelector('.propertyC-temp-modal')
  
  addTemplateCModal.addEventListener('click', () => {
    templateContainerCModal.insertAdjacentHTML('beforeend' , `
    <div class="container-template-c col-9 position-relative">
                                          
      <input type="text" required id="name" class="form-control rounded-3 name-property-c" placeholder="عنوان ویژگی">
      <input type="text" id="name" required class="form-control rounded-3 caption-property-c" placeholder="توضیحات">
      <div class="col-md-5 gy-3">
        <i class="bi bi-trash3  delete-templateC" onclick="deleteTempC(event)"></i>
      </div>
  
    </div>
    `)
  })
  
  function deleteTempC(e) {
    e.target.parentElement.parentElement.remove()
  }
  
  
  // btn for register property c
  
  let btnPropertyCModal = document.querySelector('.btn-property-c-modal')
  
  btnPropertyCModal.addEventListener('click' , propertyC)
  
  let ArrayPropertyCModal = []
  function propertyC () {
  
    let namePropertyC ;
    let capPropertyC ;
  
    document.querySelectorAll('.container-template-c-modal').forEach(parentElem => {
      
      namePropertyC = parentElem.children[0].value
      capPropertyC = parentElem.children[1].value
  
      let propertyForC = {
        property3N1 : String(namePropertyC) ,
        propertyN2 : String(capPropertyC)
      }
  
      ArrayPropertyCModal.push(propertyForC)
  
    })
  
    addToDOmCModal(ArrayPropertyCModal)
  
    // return ArrayPropertyC
  
  }
  
  
  function addToDOmCModal(ArrayPropertyC) {
    let containerC = document.querySelector('.container-property-c-modal')
  
    containerC.innerHTML = ''
  
    ArrayPropertyC.forEach(item => {
      containerC.insertAdjacentHTML('beforeend' , `
        <div class="col-md-4">
          <div class="card"  style="height: 7rem; overflow: scroll;">
            <div class="card-body">
              <h6 class="card-title">${item.property3N1}</h6>
              <p class="card-text">${item.propertyN2}</p>
            </div>
            <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
          </div>
        </div>
      `)
    })
  }
  
  
  // btn for colors template
  
  
  let addColorsModal = document.querySelector('.add-colors-modal')
  let templateColorsModal = document.querySelector('.colors-temp-modal')
  
  addColorsModal.addEventListener('click', () => {
    templateColorsModal.insertAdjacentHTML('beforeend' , `
      <div class="container-colors col-9 position-relative">
      <input type="text" required id="name" class="form-control rounded-3 name-colors" placeholder="اسم رنگ">
      <input type="text" required id="name" class="form-control rounded-3 code-colors" placeholder="کد رنگ(#)">
      <div class="col-md-5 gy-3">
          <i class="bi bi-trash3  delete-colors" onclick="deleteColors(event)"></i>
      </div>
      </div>
    `)
  })
  
  function deleteColors(e) {
    e.target.parentElement.parentElement.remove()
  }
  
  // btn for register colors
  
  
  let btnColorsModal = document.querySelector('.btn-colors-modal')
  
  btnColorsModal.addEventListener('click' , colorsModal)
  
  let ArrayColorsModal = []
  function colorsModal () {
  
    let nameColors ;
    let codeColors ;
  
    document.querySelectorAll('.container-colors-modal').forEach(parentElem => {
      
      nameColors = parentElem.children[0].value
      codeColors = parentElem.children[1].value
  
      let propertyForColors = {
        colorName : String(nameColors) ,
        colorCode : String(codeColors)
      }
  
      ArrayColorsModal.push(propertyForColors)
  
    })
  
    addToDOmColorsModal(ArrayColorsModal)
  
    // return ArrayColors
  }
  
  
  function addToDOmColorsModal(ArrayColors) {
    let containerColors = document.querySelector('.container-property-colors-modal')
  
    containerColors.innerHTML = ''
  
    ArrayColors.forEach(item => {
      containerColors.insertAdjacentHTML('beforeend' , `
      <div class="col-md-2 col-5">
      <div class="card">
          <div class="card-body">
              <h6 class="card-title">${item.colorName} - <span dir="ltr">${item.colorCode}</span></h6>
          </div>
          <i class="bi bi-trash3 delete-template-property" onclick="deleteTemp(event)"></i>
      </div>
      </div>
      `)
    })
  }