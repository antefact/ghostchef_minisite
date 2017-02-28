+++
title = "Ghost Chef"
subtitle = "A research on artificial intelligence, creativity and food"
datafolder = "ghostchef"
video="ghost3.webm"

  [hero]
    backgroundImage="bg_header_mobile.jpg"
    backgroundvideo="ghostChef_header_background.webm"

    [[hero.buttons]]
      type="startMovie"
      label="Watch the movie"
    # [[hero.buttons]]
    #   type="anchor"
    #   label="Read the Story"
    #   anchor="#intro"

  [slidinggallery]
    [[slidinggallery.item]]
    type="photo"
    img = "sketching.jpg"
    captionTitle = "sketching Plates"
    captionDescription = "Chef use to design plates on paper"

    [[slidinggallery.item]]
    type="photo"
    img = "tasks.jpg"
    captionTitle = "Task division"
    captionDescription = "every recipe is divided in microtasks to be executed inside the kitchen restaurant"

    [[slidinggallery.item]]
    type="photo"
    img = "tasks2.jpg"
    captionTitle = "Task division"
    captionDescription = "every recipe is divided in microtasks to be executed inside the kitchen restaurant"

    [[slidinggallery.item]]
    type="photo"
    img = "centaurkitchen.jpg"
    captionTitle = "The centaur kitchen"
    captionDescription = "Most kitchen are very small and very little technology has entered the kitchen in the last year. Tools are simple and reliable. "

    [[slidinggallery.item]]
    type="photo"
    img = "centaurkitchen2.jpg"
    captionTitle = "#FriedCicken"
    captionDescription = "One of the plates prepared for the centaur dinner: deep fried chicken served with bacon flavoured chips"

    [[slidinggallery.item]]
    type="video"
    video = "foodrelations.webm"
    captionTitle = "FoodConnections"
    captionDescription = "a very early experiment with the goal of understanding how ingredients are combined together in a recipe; by analyzing a big set of recipe we could create a sort of interactive word cloud you could use to discover new food combinations"

    [[slidinggallery.item]]
    type="video"
    video = "semantics.webm"
    captionTitle = "understanding food semantics"
    captionDescription = "using google natural language API we could understand the key element of a recipe and the relations between the words someone would type, accordingly to the analysis we could then decide how and where add new words to the recipe"


  [gridgallery]
    # [[gridgallery.photos]]
    # id="sketchinkPlates"
    # img = "sketching.jpg"
    # captionTitle = "sketching Plates"
    # captionDescription = "Chef use to design plates on paper"
    #
    # [[gridgallery.photos]]
    # id="tasks"
    # img = "tasks.jpg"
    # captionTitle = "task division"
    # captionDescription = "every recipe is divided in microtasks,"
    #
    # [[gridgallery.photos]]
    # id="centaurkitchen"
    # img = "centaurkitchen.jpg"
    # captionTitle = "the centaur kitchen"
    # captionDescription = ""
    #
    # [[gridgallery.photos]]
    # id="friedcicken"
    # img = "centaurkitchen2.jpg"
    # captionTitle = "# fried cicken"
    # captionDescription = "deep fried chicken served with bacon flavoured chips"

    [[gridgallery.photos]]
    id="semantic"
    video="semantics.webm"
    img = "semantics.jpg"
    captionTitle = "prototyping ghostchef"
    captionDescription = "understanding recipe semantics and adding probabilistic input"

    [[gridgallery.photos]]
    id="foodrelations"
    video="foodrelations.webm"
    img = "foodrelations.jpg"
    captionTitle = "prototyping ghostchef"
    captionDescription = "understanding recipe semantics and adding probabilistic input"

    [[gridgallery.photos]]
    id="googleApi"
    video="googleApi.webm"
    img = "googleApi.jpg"
    captionTitle = "prototyping ghostchef"
    captionDescription = "understanding recipe semantics and adding probabilistic input"

  [columnsgallery]
    [columnsgallery.headerimage]
    name = "globalGIf"
    fileName = "co-write_2.gif"
    caption= "Just start interacting with ghostchef by writing in something. Feel free to start from an ingredient, a recipe, a combination or even an emotion."
    width=12

    [[columnsgallery.image]]
    name = "globalGIf"
    fileName = "gif2.gif"
    caption= "Decide who's going to be your ghost chef, which culinary identity should inspire you."
    width=6

    [[columnsgallery.image]]
    name = "globalGIf"
    fileName = "sliders.gif"
    caption= "Tweak the intelligence behaviour by adjusting each chef specific settings."
    width=6

    [[columnsgallery.image]]
    name = "globalGIf"
    fileName = "learning.gif"
    caption= "Teach the sysyem your style and record your personal culinary identity."
    width=6

    [[columnsgallery.image]]
    name = "globalGIf"
    fileName = "extensions.gif"
    caption= "Access premium features like plating and task management."
    width=6

  [calltoaction]
    sentence = "We are looking for chefs and data scientists that want to build this future with us."
    link = "mailto:yo@bitsxbites.com"
    buttonlabel = "contact us"

    [[credits]]
    name = "bxb"
    logo = "bxb-logo.png"
    link= "http://www.bitsxbites.com"

    [[credits]]
    name = "Mill"
    logo = "mill-logo.png"
    link= "http://www.mill-intelligence.com"
+++
{{< textSection id="intro" title="What happens when AI and food meet?">}}

The first image we have in our head when we talk about food and artificial intelligence is probably a restaurant full of robotic arms chopping food or some sort of recipe generators or a bot. At Bits and Bites, however, we wanted to dig deeper in the future and discover new scenarios, new relationships, roles and experiences that might emerge in the overlap of food and Artificial Intelligence (A.I.).

Our first research project in this area focuses in the world of the kitchen. In a collaboration with Mill Food Intelligence, we explored the life of chefs and their relationship to the kitchen and technologies of today to understand and imagine the near future. We dived into the everyday life of fine dine restaurants, we spoke to street kitchens and had a look at the home kitchens of the present to understand where technology would ‘fit’ in the near future.

{{< /textSection >}}

{{< slidingGallery id="researchGallery">}}

{{< textSection id="process" title="Words, food and generative collaboration">}}

Most technology tends to look at cooking as an issue to solve and look at intelligence as a way to automate task and bring us as far from cooking as possible. What we were very interested in was to look at those more subtle ways in which intelligence could fit and enhance a chef’s experience, and rather than solving and simplifying it would be aimed at becoming a support and a collaborator, an enhancer of the ability rather than a surrogate. Using the best of machines and the best of people to find interesting new collaborative models.

We started from the simple act of writing a list of ingredients or a recipe. A lot of interaction with cooking actually happens with words. We search for recipes, we write task list, we use databases to find combinations.

While visual language became very big in the all food universe, we choose to have a text based interaction that is more effective at describing all the nuances of a plate, it's ingredients, and bring up food memories to mind. Writing with a ghost chef is not like searching for a recipe on google, it's more like having a dialogue with a specific culinary identity, the identity will have its typical style, it's favourite ingredients, and a specific set of values that make its way of cooking interesting.

{{< /textSection >}}

{{< bigVideo type="video" id="prototype_video" video="moneyshot.webm" img="googleApi.jpg" >}}

{{< textSection id="concept" title="Collaborating with an ‘artificial’ foodie">}}

Most of the ‘intelligent’ assistants that we see today or in many visions of the future are in form of bots that ‘assist’ you or even take over the actions of cooking for you. It almost feels like they all try to be at the centre of the attention.  We envisioned an intelligent tool that is subtle, open and transparent, that feels less like a cold generator using scientific data and feels more like a conversation we might have with a chef.

Ghost chef is an open collaborative platform where you can interact with an artificial ‘foodie’ and think together about food: decide what to cook today, think up new recipes, or tweak existing recipes to make them more local, healthy or quicker.

Ghost Chef is a learning assistant for chefs, a text-based helper that learns as chefs type recipes or food combinations, to capture the culinary identity and the explorations that would be lost.

Ghost Chef is also a subtle and transparent helper for people, that allows them to interact with the way a chef would generate food combinations and recipes. It uses the knowledge gathered from real chefs in a more human generative tool: based on real selected information and not generic databases; allowing people to understand and tweak the algorithm logics to adapt to their own context.

{{< /textSection >}}

{{< columnsGallery id="interactionDetail">}}

{{< textSection id="conclusion" title="From black boxes and big data to open & tasty information">}}

> "Most of the energy in the deep learning scene is focused on what I’d call “generic” problems… These challenges all depend on standard datasets. And these datasets are extremely boring" (Robin Sloan)

As we thrive for creating more transparency for the food we believe also the technology and the tools we create should be transparent to its users. _Why is this the best recipe for me?_ or, _Based on what logic this is the thing I should cook or eat?_  When thinking about creating new intelligent helpers we should make them more transparent, controllable and educational.

We imagine a future where we do not need a lot of data, but the right one, where machines and people collaborate in the kitchen and where we do not have black boxes on our countertops, but transparent and empowering tools to explore and know more about the food we eat and the technology we use.

We are prototyping ghost chef to understand its limits and full potential, if you are a cook, an AI expert, a food semantic expert or just want to know more about this drop us a line.

{{< /textSection >}}

{{< bigVideo type="video" id="final_video" video="sliders.webm" img="googleApi.jpg" >}}

{{< callToAction >}}

{{< credits >}}
