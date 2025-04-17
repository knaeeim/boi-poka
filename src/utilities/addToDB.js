import Swal from "sweetalert2";

const getFromLocalStorage = () => {
    const data = localStorage.getItem('readList');

    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}


const addToLocalStorage = (id) => {
    const readList = getFromLocalStorage();
    const exist = readList.includes(id);
    if(exist){
        Swal.fire({
            title: "Already Added in The Read List..",
            icon: "error",
            draggable: true
          });
    }
    else{
        readList.push(id);
        localStorage.setItem('readList', JSON.stringify(readList));
        Swal.fire({
            title: "Successfully Added in the Read List!",
            icon: "success",
            draggable: true
          });
    }
} 

export { addToLocalStorage, getFromLocalStorage };