// tsc --init  --> tsconfig.json 

const numElement = document.getElementById('num') as HTMLInputElement;  // type casting, HTMLInputElement is general type. let typescript know this element has a value
const buttonElement = document.querySelector('button')!; // ! : we know the statement in front is not null // can be null, strictNullChecks by tsconfig.json
// const buttonElement: HTMLButtonElement

type numOrstr=number | string
type Tobj={val:number};
interface Iobj {val:number};

function convert(num : number | string) {  
  return +num;
}

function display(itemObj: Tobj, item1Obj:Iobj){
  console.log(itemObj.val, item1Obj.val);
}

buttonElement.addEventListener('click', () => {
  const num = numElement.value;  // HTMLInputElement.value: string

  const result = convert(num);
  console.log(result);
  display({val:5},{val:10}); // 5 10
});

