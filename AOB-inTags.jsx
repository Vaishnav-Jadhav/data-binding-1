import React  from "react";

export function BindingInList()
{
    let menu=[{categories:"Electronics",products:["Mobile","Laptop","Smart watch","Head Phones"]},
                    {categories:"Fashion",products:["Dress","Pants","Suits","Jogger"]},
                    {categories:"Footwere",products:["Addidas","Nike","Jordan","Puma"]}  
                 ];

    let topics=[{title:"HTML",info:"It is a markup language"},
                {title:"CSS",info:"It is a Style sheet"}
    ]
    
     return(
        <>
          <h2>Product List</h2>   
          <ol >
            {
                menu.map(value=>
                    <li key={value.categories} className="bg-white p-0 text-start">{value.categories}
                        <ul className="d-block">
                            {
                                value.products.map(item=>
                                    <li key={item} className="bg-white p-0 text-start">{item}</li>
                                )
                            }
                        </ul>
                    </li>
                )
            }
          </ol>

          <dl className="m-5 border border-1 w-25 p-4">
            {
                topics.map(value=>
                    <React.Fragment key={value.title}>
                        <dt>{value.title}</dt>
                        <dd>{value.info}</dd>
                    </React.Fragment>
                )
            }
          </dl>
          
        </>)
}