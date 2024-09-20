from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Hey! I'm Shahbot, your assistant for anything you'd like to know about me :)")

        data= [ { "title":"About Me", "payload":"/ask_about_me" } ]
        dispatcher.utter_message(text="Let's start with something simple:", buttons=data)

        return []

class ActionMainMenu(Action):

    def name(self) -> Text:
        return "action_main_menu"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        data= [{ "title":"Work Experience", "payload":"/ask_work_experience" }, { "title":"Certifications", "payload":"/ask_certifications" }, { "title":"Projects", "payload":"/ask_projects" }, { "title":"Education Qualifications", "payload":"/ask_education" }, { "title":"Roles of Responsibilities", "payload":"/ask_roles_responsibilities" }, { "title":"Resume", "payload":"/ask_resume" }, { "title":"Contact Me", "payload":"/ask_contact" } ]
        dispatcher.utter_message(buttons=data)

        return []
    
class ActionFollowUp(Action):

    def name(self) -> Text:
        return "action_follow_up"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        data= [{ "title":"Show Main Menu", "payload":"/ask_give_options" }, { "title":"End Chat", "payload":"/goodbye" }]
        dispatcher.utter_message(buttons=data)

        return []