<h1>Introduction to Redux</h1>
Design Patterns:
Well-Documented solution to a recurring problem
Also referred to as an architecturlal pattern

<h2>Software design pattern</h2>
-Reusable solution to commonly occurring problems 
Gang of four- scientist

The Model View Countroller(MVC) Framework:
Software engineering architecture pattern
- Isolation of domain logic from user interface
- Permists independent development 

The separation of independent components leads to three parts of the application:
- View: Presents the information to the user.
- Model: Stores the domain state and the domain logic and also provides the way of manipulating this state from the rest of the aplication.
- Controller: Mediates between the view and the model

The model the model manages the behavior and data of the application domain. And the model responds to requestsfor inormation about current state. So typically when the view wants to render , or the view wants to update itself, it might query the model in order to obtain information, so that it can render appropriately to the user. The model also will repond the requests fror the chang eof its state. This is usually done throw the Controller. In an event-driven sytem, the model also can be configured to notify observers.The job of the controller is to receive information from that view. So any user interaction that is formed will be captured and then passed on to the controller in order to act on these user interactions. And it is the job of the controller then to initiate a change of the state of the model if it is required in this particular situation. So, the controller will appropriately cost the change of the state of the model. So, to summarize, the controller can accept input from the user in terms of the user interactions that have taken place, and then it will instruct the model to change the state. Simultaneously, the controllers may also cause the view to change the way information has been shown in the view. So that is the reason why in this picture, you have two arrows going from the controller.

<h2>The Flux Architecture:</h2>

Motivation:

Normally for the sake of simplicity and ease, react application are created in such a way that the main component has the state and it is responsible for other component's state that are being presented to the viewer. Thus, the main component handles all. 
But this design is not sufficient but it works for only one hierarchy. Its possible that an application has multiple hierarchies. Having single root doesn't not simply scale that much.

Also, the problem with multiple hierarchy is, for example, suppose if one component's state is changed by a viewer and another components has to reflect it, then it will only be possible if they have same root. In case if they are present in different hierarchy, it will be very difficult to pass the state.

To manage all these, the apporach is to split our application into two different units. Therefore we can adapt MVC approach. 

When React started, the react was supposed to be V in MVC. But its now much more than that now. But Facebook got some issues with the legacy MVC approach. Therefore, they went with their approach which was "like" MVC but different from that in certain ways. 

The Flux Architecture: 

Action -> Dispatcher -> Store -> viewer

Thus, the central unit of our application is now store. Store contains all the states of the application. Everybody shares the store. The modification to the store is only allowed throw actions.
Dispatcher is a controlling unit which monitors actions and determins how they will be executed. 

Now, the View can't directly change the store. The view have to pass actions to the dispatcher which will apply actions to the store. The store will then send the updates if it changes to the views. This will result in rerendering of the component.

Action -> Dispatcher -> Store -> viewer -> Action -> Dispatcher -> Store-> View

<h2> Redux Thunk (Redux Middleware) </h2>

Provides the cappability to run code after an action is dispatched, but before it reaches the reducer. 

- Third-party externsion point
- eg, logging, async API calls (intercept the action after calls)

Middleware: 
- Form the pipeline after the dispatch
- Inspection the actions and the state, 
- modify actions,
- dispatch other actions,
- Stop actions from reachning the reducers, etc

React Transition Group
A set of component for managing component states(including munting and unmounting) over time, specifically designed with animation in mind
- Components supported: 
1. Transition
2. CSSTRAnsition
3. TransitoinGroup

Transition
Lets you describe a transition from one component state to another over time
- entering, entered, exiting, exited
Used to animate the mounting and unmounting of a component
The in prop is used to toggle the transition state
- When true the component begins the sequence of entering -> 