TITLE: Purple Cow Project

    A react SPA hosted in a docker container.

    Allows increments to CountAPI and displays current count.

SYSTEM REQUIREMENTS:

    docker 19.03.13
    docker-compose 1.26.2

CONFIG:

    Configurable Variables:

        REACT_APP_COUNTAPI - The CountAPI key
        PORTS - "<external port>:<internal port>"

    To setup open the compose files, docker-compose.yml for production, and dev.yml for dev.
    There you're able to update the CountAPI key, or the external port values.

BUILD:

    Dev Enviroment:

        ```docker-compose -f dev.yml build```

    Prod Enviroment:

        ```docker-compose build```

RUN:

    Dev Enviroment:

        The live dev server is hosted at port 3001 by default
        
        ```docker-compose -f dev.yml up```

    Prod Enviroment:

        Production Server is hosted at port 3000 by default
        
        ```docker-compose up```

TODO:

    Implement the remaining CountAPI features, as appropiate:
        - Setting the counter to specific values
        - Create new keys, and dynamically shift to them
        - Getting key stats
        - Getting namespace stats
        - Managing namespaces and keys

    These are assuming that the enduser needs these features. Understanding the client and desired usecase would be critical to the planning and management of future features. 
    
    Potential questions:
    
        - Why does it do what it does
        - who is using it
        - is this part of a greater process or a standalone project
        - who is maintaining this
        - what is the expected budget for this moving forward
        - is it possible to integrate this with other tools