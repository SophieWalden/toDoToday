import React from 'react';

function ApiExample(){

    // Example of creating a login in the database
    // React.useEffect(() => {
    //     fetch('http://127.0.0.1:5000/login/createLogin/' // <-- URL of api request
    //         , {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({"password": "testPassword", "username": "testUser"})

    //         }
    //     ).then(res => {
    //         console.log(res["status"]);
    //     });
    // }, []);

    // Returns with code 200 if it's a  valid login else will return 401
    React.useEffect(() => {
        fetch('http://127.0.0.1:5000/tasks/getTasks/test@gmail.com'  // <-- URL of api request
            , {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: "cors"
            }
        ).then(res => {
          return res.json()
        }).then(json => {
          console.log(json);
        });
    }, []);


    return (
        <div>
            <p>
                Api may be working?
            </p>
        </div>
    );

}

export default ApiExample;