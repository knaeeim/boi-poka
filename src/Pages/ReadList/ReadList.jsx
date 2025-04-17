import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { getFromLocalStorage } from "../../utilities/addToDB";
import ReadListBook from "./ReadListBook";
import { PiEmptyBold } from "react-icons/pi";

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sortType, setSortType] = useState('');
    const books = useLoaderData();
    
    useEffect(() => {
        const readListID = getFromLocalStorage();
        const readListData = books.filter(book => readListID.includes(book.bookId))
        setReadList(readListData); 
    }, [])

    const handleSort = (type) => {
        setSortType(type);
        if (type === "Rating"){
            const sortedBooks = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedBooks);
        }

        if( type === "Page Number"){
            const sortedBooks = [...readList].sort((a,b)=> b.totalPages - a.totalPages);
            setReadList(sortedBooks);
        }
        document.activeElement.blur();

    }
    return (
        <Tabs>
        <TabList>
            <Tab><span className="flex justify-center items-center gap-2 font-bold"><FaCheckCircle color="green" /> Read List</span></Tab>
            <Tab><span className="flex justify-center items-center gap-2 font-bold"><MdWatchLater color="gray"/> Wish List</span></Tab>
        </TabList>

        <TabPanel>
            {
                readList.length > 0 ? (
                    <>
                        <div className="flex justify-between items-center">
                            <div className="">

                            </div>
                            <div className="">
                                <h2 className="text-3xl font-semibold text-center mt-5">📚 Your Read Books....</h2>
                            </div>

                            <div className="dropdown dropdown-end"> 
                                <label tabIndex={0} role="button" className="btn m-1">Click Here Sort {sortType && `by : ${sortType}` } ⬇️</label>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li onClick={()=>handleSort('Rating')} className="text-black"><a>Sort By Rating</a></li>
                                    <li onClick={()=>handleSort('Page Number')} className="text-black"><a>Sort by Page Number</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-5 pb-10 md:px-10 justify-items-center gap-y-10 mt-10">
                            {
                                readList.map((book, index)=> {
                                    return <ReadListBook key={index} book={book}></ReadListBook>
                                })
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <div className="h-[55vh] flex justify-center items-center">
                            <h1 className="text-4xl text-red-500"> <span className="flex justify-center items-center gap-6"><PiEmptyBold /> Not Book added Yet</span></h1>
                        </div>
                    </>
                )
            }
        </TabPanel>
        <TabPanel>
            <div className="h-[55vh] flex justify-center items-center">
                <h1 className="text-4xl text-red-500"> <span className="flex justify-center items-center gap-6"><PiEmptyBold /> Not Book added Yet</span></h1>
            </div>
        </TabPanel>
        </Tabs>
    );
};

export default ReadList;
