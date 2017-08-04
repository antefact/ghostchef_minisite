+++
title = "Ghost Chef"
subtitle = "A research on artificial intelligence, creativity and food"
datafolder = "ghostchef"
video="Ghostchef_Teaser.webm"

  [hero]
    backgroundImage="bg_header_mobile.jpg"
    backgroundvideo="ghostChef_header_background.webm"

    [[hero.buttons]]
      type="startMovie"
      label="Watch the story"
    # [[hero.buttons]]
    #   type="anchor"
    #   label="Read the Story"
    #   anchor="#intro"

  [slidinggallery]

    [[slidinggallery.item]]
    type="photo"
    img = "centaurkitchen2.jpg"
    captionTitle = "#FriedCicken"
    captionDescription = "In our research we dived one day in the life in a small fine dining restaurant"

    [[slidinggallery.item]]
    type="photo"
    img = "centaurkitchen.jpg"
    captionTitle = "The centaur kitchen"
    captionDescription = "Most technology we see in the kitchen is simple and reliable tools to streamline processes"

    [[slidinggallery.item]]
    type="photo"
    img = "sketching.jpg"
    captionTitle = "Sketching Plates"
    captionDescription = "However the preparation and ideation process often relies on analog sketching"

    [[slidinggallery.item]]
    type="photo"
    img = "tasks.jpg"
    captionTitle = "Estimations"
    captionDescription = "Estimating the right quantity for each ingredient heavily relies on experience"

    [[slidinggallery.item]]
    type="photo"
    img = "tasks2.jpg"
    captionTitle = "Task division"
    captionDescription = "Every recipe is divided in microtasks to be executed inside the kitchen restaurant"


    # [[slidinggallery.item]]
    # type="video"
    # video = "foodrelations.webm"
    # captionTitle = "FoodConnections"
    # captionDescription = "a very early experiment with the goal of understanding how ingredients are combined together in a recipe; by analyzing a big set of recipe we could create a sort of interactive word cloud you could use to discover new food combinations"
    #
    # [[slidinggallery.item]]
    # type="video"
    # video = "semantics.webm"
    # captionTitle = "understanding food semantics"
    # captionDescription = "using google natural language API we could understand the key element of a recipe and the relations between the words someone would type, accordingly to the analysis we could then decide how and where add new words to the recipe"


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
{{< textSection id="intro" title="What happens when food meets a.i.?">}}

In our quest for discovering and building the future of good food we will have to consider, as most industries, the impact that artificial intelligence will have. While there is already a lot of examples of applications of automated systems in agriculture and in the industrialized processes, we wanted to look closer to the everyday experience of consumer and explore what will happen when A.I. enters the kitchen.
The first image we have in our head when we talk about a kitchen and artificial intelligence is probably of the early examples that we have today: restaurants with of robotic arms chopping food or making noodles or home assistants  like amazon's alexa telling us recipes on command. However we wanted to look a bit further in the future and really explore **what new relationships and opportunities will arise when man and machine will be cooking together.**

We started our first exploration by bringing together, for 6 weeks, a group of designers and creative technologists and a group experts of the kitchen and its business.

{{< /textSection >}}

{{< slidingGallery id="researchGallery">}}

{{< textSection id="process" title="Keeping the 'knowledge' of a kitchen">}}

We dived into the everyday life of a fine dine restaurant where the kitchen is used at its limits to understand where an 'intelligent' machine would ‘fit’ in the near future. One of the most interesting insights of our research was to realize how much information is 'stored' in the head of a chef, how much knowledge is lost and scattered on different pieces of papers, lists, and softwares. And, while there are many machines that already help automate and simplify the act of cooking, just few tools are there to support the thought process of deciding what to cook and why.

**How might we create a tool that would support memory, estimations and complex task of a professional or home chef?**

**How can we enhance creativity in the kitchen beyond accessing random recipe generators? How might we create a tool to learn and evolve the knowledge of a chef? And what if we could use that to help others?
**
{{< /textSection >}}

{{< bigVideo type="video" id="concept_video" video="Ghostchef_concept.webm" img="googleApi.jpg" >}}

{{< textSection id="concept" title="Co-creating with a machine">}}

While many examples of "smart" products tend to look at cooking as an issue to solve and to bring us as far from cooking as possible, we wanted to look at artificial intelligence less as a tool for automation of tasks and more as a tool for augmentation of people: using the best of machines and the best of people to find interesting new collaborative models.
Starting from one of the simple use cases that happens in the kitchen, writing a set of ingredients or a recipe on a digital paper, we explored ways in which a 'machine' could learn and retain the knowledge of an expert chef.

**Ghost Chef is a learning assistant for chefs**, a text-based helper that learns over time from them. Typying recipes or food combinations, it captures their culinary identity to create a memory for their own or to share with others.

**Ghost Chef is a subtle and transparent helper for people**, allowing them to interact with an artificial ‘foodie’ and think together about food: decide what to cook today, think up new recipes, or tweak existing recipes to make them more local, healthy or quicker.

**Ghost Chef is a contextual and adapting tool**, it uses the knowledge gathered from real chefs but it makes it more alive than a recipe book. Based on real selected information and not generic databases, allows people to understand and tweak the algorithm logics to adapt to their own context.

Writing with a ghost chef is not like searching for a recipe on google, it’s more like having a dialogue with a specific culinary identity, the identity will have its typical style, it’s favourite ingredients, and a specific set of values that make its way of cooking interesting.

{{< /textSection >}}

{{< columnsGallery id="interactionDetail">}}

{{< textSection id="concept" title="Prototyping a co-writing experience">}}

Imagine that moment when you are thinking about what to cook, starting from an ingredient you have in the fridge or even a type of taste you have in mind. What if instead of losing yourself in infinite searches online or going through recipe books, you would be able to collaborate with a chef as if you were both sketching or writing on a piece of paper?

We tested this idea by first co-writing with real chefs online, using a shared document and having chefs from around the world pretending to be a sort of human autocomplete.

Then we started prototyping aur idea with code. using Natural Language Processing (NLP) we were able to understand the relationship between ingredients in a sentence, and then playing with some generative techniques we could add to the user input suggesting new matching ingredients or preparations.

Ultimately we built a small working demo to explore how a digital interface could allow you to interact directly with the AI and the data.

{{< /textSection >}}

{{< bigVideo type="video" id="final_video" video="semantics.webm" img="googleApi.jpg" >}}

{{< textSection id="concept" title="A future of 'small', transparent and quality data for the kitchen">}}

>“Most of the energy in the deep learning scene is focused on what I’d call “generic” problems… These challenges all depend on standard datasets. And these datasets are extremely boring” _(Robin Sloan)_

As we thrive for creating more transparency for the food we believe also the technology and the tools we create should be transparent to its users. Why is this the best recipe for me? or, Based on what logic this is the thing I should cook or eat? When thinking about creating new intelligent helpers we should make them more transparent, controllable and educational.

**We imagine a future where we do not need a lot of data, but the right one, where machines and people collaborate in the kitchen and where we do not have black boxes on our countertops, but transparent and empowering tools to explore and know more about the food we eat and the technology we use.**
{{< /textSection >}}

{{< callToAction video="sliders.webm" image="sliders_callToAction.jpg">}}

{{< credits >}}
