const DURATION = 600;

let nowLocation = '';
let prevLocation = '';

let isOpenMenu = false;

const menuRef = document.querySelector("#menu");
const headerRef = document.querySelector("header");

const topRef = document.querySelector("#top");
const conversionRef = document.querySelector("#conversion");
const agingRef = document.querySelector("#aging");
const washRef = document.querySelector("#wash");
const freeRef = document.querySelector("#free");

const topBackRef = document.querySelector("#topBack");
const conversionBackRef = document.querySelector("#conversionBack");
const agingBackRef = document.querySelector("#agingBack");
const washBackRef = document.querySelector("#washBack");
const freeBackRef = document.querySelector("#freeBack");

const parapen = document.querySelector("#parapen");
const feno = document.querySelector("#feno");
const seki = document.querySelector("#seki");
const siri = document.querySelector("#siri");
const gouchaku = document.querySelector("#gouchaku");
const goukou = document.querySelector("#goukou");
const freeItem = document.querySelector('#freeItem');
let itemIndex = 0;
let prevItemIndex = 0;

let interval = null;

const loadLocation = () => {
  const hash = location.hash;
  hash
    ? nowLocation = hash
    : nowLocation = '';
};

const setPrevLocation = () => {
  nowLocation
    ? prevLocation = nowLocation
    : prevLocation = '';
};

const vissibleComponent = (hash) => {
  switch(hash) {
    case "#conversion":
      conversionRef.style.display = "flex";
      break;
    case "#top":
      topRef.style.display = "block";
      break;
    case "#aging":
      agingRef.style.display = "flex";
      break;
    case "#wash":
      washRef.style.display = "flex";
      break;
    case "#free":
      freeRef.style.display = "flex";
      break;
    default :
      topRef.style.display = "block";
      break;
  };
};

const vissibleBack = (hash) => {
  switch(hash) {
    case "#conversion":
      conversionBackRef.style.display = "block";
      conversionBackRef.style.zIndex = "-1";
      break;
    case "#top":
      topBackRef.style.display = "block";
      topBackRef.style.zIndex = "-1";
      break;
    case "#aging":
      agingBackRef.style.display = "block";
      agingBackRef.style.zIndex = "-1";
      break;
    case "#wash":
      washBackRef.style.display = "block";
      washBackRef.style.zIndex = "-1";
      break;
    case "#free":
      freeBackRef.style.display = "block";
      freeBackRef.style.zIndex = "-1";
      break;
    default :
      topBackRef.style.display = "block";
      topBackRef.style.zIndex = "-1";
      break;
  };
};

const lazyDone = async (func) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      func();
      resolve();
    }, DURATION);
  })
};

const initializeFreeItemComponent = () => {
  parapen.style.display = "none";
  parapen.classList.remove("hide-item");
  feno.style.display = "none";
  feno.classList.remove("hide-item");
  seki.style.display = "none";
  seki.classList.remove("hide-item");
  siri.style.display = "none";
  siri.classList.remove("hide-item");
  gouchaku.style.display = "none";
  gouchaku.classList.remove("hide-item");
  goukou.style.display = "none";
  goukou.classList.remove("hide-item");
  freeItem.style.display = "none";
  freeItem.classList.remove("hide-item");

  itemIndex = 0;
  prevItemIndex = 0;

  clearInterval(interval);
}

const freeItemComponent = () => {
  const hideItem = (itemIndex) => {
    switch (itemIndex) {
      case 0:
        parapen.style.display = "none";
        parapen.classList.remove("hide-item");
        break;
      case 1:
        feno.style.display = "none";
        feno.classList.remove("hide-item");
        break;
      case 2:
        seki.style.display = "none";
        seki.classList.remove("hide-item");
        break;
      case 3:
        siri.style.display = "none";
        siri.classList.remove("hide-item");
        break;
      case 4:
        gouchaku.style.display = "none";
        gouchaku.classList.remove("hide-item");
        break;
      case 5:
        goukou.style.display = "none";
        goukou.classList.remove("hide-item");
        break;
      default:
        break;
    }

    freeItem.style.display = "none";
    freeItem.classList.remove("hide-item");
  }

  const vissibleItem = (itemIndex) => {
    switch (itemIndex) {
      case 0:
        parapen.style.display = "block";
        break;
      case 1:
        feno.style.display = "block";
        break;
      case 2:
        seki.style.display = "block";
        break;
      case 3:
        siri.style.display = "block";
        break;
      case 4:
        gouchaku.style.display = "block";
        break;
      case 5:
        goukou.style.display = "block";
        break;
      default:
        break;
    }
    freeItem.style.display = "block";
  }

  const addHideClass = (itemIndex) => {
    switch (itemIndex) {
      case 0:
        parapen.classList.add("hide-item");
        break;
      case 1:
        feno.classList.add("hide-item");
        break;
      case 2:
        seki.classList.add("hide-item");
        break;
      case 3:
        siri.classList.add("hide-item");
        break;
      case 4:
        gouchaku.classList.add("hide-item");
        break;
      case 5:
        goukou.classList.add("hide-item");
        break;
      default:
        break;
    }
    freeItem.classList.add("hide-item");
  }

  const changeItem = () => {
    addHideClass(prevItemIndex);
    lazyDone(() => {
      hideItem(prevItemIndex);
      vissibleItem(itemIndex);
    });
  };

  const countIndex = () => {
    prevItemIndex = itemIndex;
    itemIndex === 5
      ? itemIndex = 0
      : itemIndex++;
  }

  interval = setInterval(() => {
    countIndex();
    changeItem();
  }, 3000);

  const init = () => {
    parapen.style.display = "none";
    parapen.classList.remove("hide-item");
    feno.style.display = "none";
    feno.classList.remove("hide-item");
    seki.style.display = "none";
    seki.classList.remove("hide-item");
    siri.style.display = "none";
    siri.classList.remove("hide-item");
    gouchaku.style.display = "none";
    gouchaku.classList.remove("hide-item");
    goukou.style.display = "none";
    goukou.classList.remove("hide-item");

    interval();
  };

  init();

  return () => {
    clearInterval(interval);
  };
};

const changeComponent = () => {
  const CLASS_NAME = "hide"

  const addHideClass = (hash) => {
    switch(hash) {
      case "#conversion":
        conversionRef.classList.add(CLASS_NAME);
        break;
      case "#top":
        topRef.classList.add(CLASS_NAME);
        break;
      case "#aging":
        agingRef.classList.add(CLASS_NAME);
        break;
      case "#wash":
        washRef.classList.add(CLASS_NAME);
        break;
      case "#free":
        freeRef.classList.add(CLASS_NAME);
        break;
      default :
        topRef.classList.add(CLASS_NAME);
        break;
    };
  };

  const removeHideClass = (hash) => {
    switch(hash) {
      case "#conversion":
        conversionRef.classList.remove(CLASS_NAME);
        break;
      case "#top":
        topRef.classList.remove(CLASS_NAME);
        break;
      case "#aging":
        agingRef.classList.remove(CLASS_NAME);
        break;
      case "#wash":
        washRef.classList.remove(CLASS_NAME);
        break;
      case "#free":
        freeRef.classList.remove(CLASS_NAME);
        break;
      default :
        topRef.classList.remove(CLASS_NAME);
        break;
    };
  };

  const rowBack = (hash) => {
    switch(hash) {
      case "#conversion":
        conversionBackRef.style.zIndex = "-2";
        break;
      case "#top":
        topBackRef.style.zIndex = "-2";
        break;
      case "#aging":
        agingBackRef.style.zIndex = "-2";
        break;
      case "#wash":
        washBackRef.style.zIndex = "-2";
        break;
      case "#free":
        freeBackRef.style.zIndex = "-2";
        break;
      default :
        topBackRef.style.zIndex = "-2";
        break;
    };
  };

  const hideComponent = (hash) => {
    switch(hash) {
      case "#conversion":
        conversionRef.style.display = "none";
        conversionBackRef.style.display = "none";
        break;
      case "#top":
        topRef.style.display = "none";
        topBackRef.style.display = "none";
        break;
      case "#aging":
        agingRef.style.display = "none";
        agingBackRef.style.display = "none";
        break;
      case "#wash":
        washRef.style.display = "none";
        washBackRef.style.display = "none";
        break;
      case "#free":
        freeRef.style.display = "none";
        freeBackRef.style.display = "none";
        break;
      default :
        topRef.style.display = "none";
        topBackRef.style.display = "none";
        break;
    };
  };

  const componentWillHide = (hash) => {
    rowBack(hash);
    vissibleBack(nowLocation);
    addHideClass(hash);
  };

  if (prevLocation === "#free") {
    initializeFreeItemComponent
  }

  componentWillHide(prevLocation);
  lazyDone(() => {
    hideComponent(prevLocation);
    removeHideClass(prevLocation);
    vissibleComponent(nowLocation);
    if (nowLocation === "#free") {
      freeItemComponent()
    }
    setPrevLocation();
  });
};

const openMenu = () => {
  isOpenMenu = true;

  menuRef.classList.add("close");
  headerRef.classList.add("open");
};

const closeMenu = () => {
  isOpenMenu = false;

  menuRef.classList.remove("close");
  headerRef.classList.remove("open");
};

window.addEventListener("hashchange", () => {
  loadLocation();
  changeComponent();
  if (isOpenMenu) {
    closeMenu();
  }
});

menuRef.addEventListener("mouseenter", () => {
  if (!isOpenMenu) {
    openMenu();
  }
});

headerRef.addEventListener("mouseleave", () => {
  if (isOpenMenu) {
    closeMenu();
  }
});

window.onload = () => {
  loadLocation();
  vissibleBack(nowLocation);
  vissibleComponent(nowLocation);
  setPrevLocation();

  if (nowLocation === "#free") {
    freeItemComponent()
  }
};
