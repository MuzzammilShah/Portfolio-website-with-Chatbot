## Instructions

*Make sure you have set up the virtual environment in your project, Have installed Rasa and Flask (Check requirements.txt)*

### Implementation

All the necessary setup have already been implemented for you in the project. Once you have developed your bot and you are ready to integrate the bot with the UI, you can start the Rasa server using the below commands.

- Open one terminal and run the command:
  ```
  rasa run -m models --enable-api --cors "*"
  ```

- Open another terminal if you have custom actions (In this project we do), you can start the action server using the below command
    ```
    rasa run actions --cors "*"
    ```

Note: If you are facing any issues here, you can run both those commands again by adding a `--debug` to the end of it respectively.

- Once you have you have both those Rasa servers up and running, Open another terminal and Open run the command
    ```
    flask run
    ```
If this is run successfully, you will see that your site is `running on http://127.0.0.1:5000`, Ctrl+Click on the link to view your site!

-----

### Versions used:

```
Python 3.10.0
```

```
Rasa Version      :         3.6.20
Minimum Compatible Version: 3.5.0
Rasa SDK Version  :         3.6.2
```