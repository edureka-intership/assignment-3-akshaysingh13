class restaurantManager{
    restaurantList=[
          {  name:"ambar",address:"indore sec-2",city:"indore"},
          {  name:"salman",address:"banglor sec-34",city:"banglore"},
          {  name:"shankar",address:"germany sec-2",city:"Germany"} 
    ]
    printAllRestaurantNames(){
        
        this.restaurantList.forEach((restroname)=> {
            console.log(restroname.name);
        });

    }
    filterRestaurantByCity(city){
        for (const cityname of this.restaurantList){
            if (cityname.city==city){
                console.log(cityname.name+ " "+cityname.address);
            }
        }  
    }
}

let obj= new restaurantManager();
obj.printAllRestaurantNames();
obj.filterRestaurantByCity("indore");