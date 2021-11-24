create a form where to type text and when I submit the counter increment by the number of letters submitted.


The Enthusiast Dealership App is a React CRUD application. It is composed of 6 components following this hierarchy:

                                      App
                                         |
                                         |
                    ____________________________
                    |                 |            |                        |
                Header     Form       CarDetails     CarContainer
                                                                            |
                                                                    __________
                                                                    |                  |
                                                            Filter            CarCard


The Header component consists of 2 link buttons: The first one is Car Inventory that directs the user to the main list of cars and Add New Car that directs to the form that the user can use to submit a new car to the inventory. The Form component's submit action is linked to redirecting the user to the main car list where the newly submitted vehicle is added to the main list.

The CarContainer component includes 2 children components: a Filter and a CarCard. The Filter displays the cart Enthusiast categories represented via clickable buttons that display a sub-list of cars. 
Each CarCard has a Learn More button that links to the CarDetails component which displays more details about that specific vehicle.
The detailed card also has a delete button (link) that delete the selected car and re-direct the user to the main car list.
The user can like or dislike a car in the main car list using the heart icon button.