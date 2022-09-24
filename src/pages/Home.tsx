import React from "react";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { Skeleton , PizzaBlock ,Categories,Pagination , Sort , sortList} from "../components";
import qs from 'qs'
import {   setCategoryId , setCurrentPage , setFilters } from "../redux/filter/slice";
import {  useNavigate } from "react-router-dom";
import { useRef } from "react";
import {  selectPizzaData  } from "../redux/pizza/selectors";
import { useAppDispatch } from "../redux/store";
import { selectFilterSlice } from "../redux/filter/selectors";
import { fetchPizzas } from "../redux/pizza/asyncActions";


const Home:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const {items , status} = useSelector(selectPizzaData)

  const {categoryId , sort ,currentPage, searchValue}= useSelector(selectFilterSlice)

  const sortType = sort.sortProperty



 

  const onChangeCategory = React.useCallback(
    (id:number) => {
      dispatch(setCategoryId(id));
  },[]
  )
  
const onChangePage = (page:number) =>{
  dispatch(setCurrentPage(page))
}

const getPizzas = async () =>{

  const order = sortType.includes("-") ? "asc" : "desc";
  const sortBy = sortType.replace("-", "");
  const category = categoryId > 0 ? `&category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : '';


  dispatch(
    
    fetchPizzas(
    { 
      order, 
      sortBy,
      category, 
      search ,
      currentPage:String(currentPage)
    }
  ))
 
  window.scrollTo(0, 0);
}
useEffect(()=>{
  getPizzas()
},[categoryId,sort.sortProperty,searchValue,currentPage])
// useEffect(()=>{
//   if(isMounted.current){
//     const queryString = qs.stringify({
//       sortProperty:sort.sortProperty,
//       categoryId,
//       currentPage
//     })
//     navigate(`?${queryString}`)
    
//   }
//   if(!window.location.search){
//     dispatch(fetchPizzas({} as SearchPizzaParams))
//   }
  
// },[sortType, categoryId , searchValue , currentPage])

// useEffect(()=>{
// if(window.location.search){
//   const params =( qs.parse(window.location.search.substring(1))as unknown as SearchPizzaParams)
//   const sort = sortList.find(obj=> obj.sortProperty === params.sortBy)

//   // isSearch.current = true
// dispatch(setFilters({
//   searchValue:params.search,
//   categoryId:Number(params.category),
//   currentPage:Number(params.currentPage),
//   sort: sort || sortList[0]
// }))

// }
// isMounted.current = true
// },[])

//   useEffect(() => {
//    if(!isSearch.current){
//     getPizzas()
//    }
//    isSearch.current = false
   
//   }, [sortType, categoryId , searchValue , currentPage,]);



  const pizzas = items.filter((obj:any )=> {
     if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
       return true
     }
     return false
  }).map((obj:any) => <PizzaBlock  key={obj.id}  {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} /> 
  ));

  return (
    <div className="container">
      {" "}
      <div className="content__top">
        <Categories 
          onChangeCategory={(index:any) =>onChangeCategory(index)}
      categoryId={categoryId}
        />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питс ы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
     
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  );
};

export default Home