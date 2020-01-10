
# Micro Frontends Are Easy

Today we are going to explain it in a very simple way and show how to use it with an example.

![](https://cdn-images-1.medium.com/max/2000/1*XyCziOza9NgVl4NZ-YPhng.png)

### What is it? (Short answer)

Roughly saying, you are just splitting a complex web app in smaller projects and putting it together on a page with iframes.

Iframes are not the only way to do it. We are going to show the most used solutions. But, for now, let’s explore why we should use micro frontends.

### Why are companies using it?

![](https://cdn-images-1.medium.com/max/2000/1*DGODcdTQYgpNxK0qV-LnPg.png)

It is easier to manage 10 projects of 10 people each than manage one big project of 100 people. The key concept here is **scalability**. By breaking big projects we get:

* Separated repositories

* Independent deployments

* Faster builds and releases

* Autonomous teams

* Easier debugging and maintenance

### Break your application by domains

![](https://cdn-images-1.medium.com/max/2000/1*kfyyxbiAdKaxRHSaYmmNJQ.png)

Imagine that you are creating a complex React app for movies stream. You would have many developers but it is still very challenging to manage it. For that reason, you could break the app in four main domains:

* **Movies catalog**

* **Video player**

* **User's profile**

* **Account payments**

Now you create one separated React app for each domain and use some resource, like iframes, to composite a page that shows the four apps as one to the user.

If you add a new payment method to the **Account payments**, you redeploy only its app and not the whole site.

## How to do it

### Iframes

The simplest way to start. We can use the window postMessage()to communicate between the applications. We are going to use this in our example.

### Single SPA

It is a framework to compose applications on the frontend. If you need to start a real-life project today, choose this one:
[single-spa.js.org](https://single-spa.js.org/)

### Frint

Another framework to compose applications on the frontend. More flexible than Single SPA but newer and less popular:
[frint.js.org](https://frint.js.org/)

### Web components

It is not a framework but a browser feature and maybe the future of the internet. Here is an article on it: 
[https://www.webcomponents.org/introduction](https://www.webcomponents.org/introduction)

### Taylor

It uses a different approach by composing the routing page on the backend with node.js. If you like the idea, it is worth to check out:
[https://github.com/zalando/tailor](https://github.com/zalando/tailor)

## Composing micro frontends in 3 files

![](https://cdn-images-1.medium.com/max/2000/1*XUfVvcACISi5XqIYTkObcA.png)

Now, we are going to create a minimalist micro frontend integration with 3 files:

* Products** Catalog**, a micro frontend made with plain javascript.

* Shopping** Cart**, another micro frontend created with Vue.js.

* **Composition**, an html file that displays both apps as one page.

![](https://cdn-images-1.medium.com/max/2000/1*npviIreOkDIG8cPdJvQR2w.png)

The main idea is to have fruits on the products **catalog**, allowing the user to add then to the shopping **cart**. PostMessage() is a browser`s resource that will allow us to do the parent/child communication.

Ok, let me see some code now.

### composition.html

<iframe src="https://medium.com/media/10db63effa5d12afbad37ec3402523ea" frameborder=0></iframe>

On line 13 we associate the cart iframe with a constant. On line 14 we set the composition page to listen to the message events and then redirect the same message to the cart iframe.

### catalog/index.html

<iframe src="https://medium.com/media/87977977fc42d7527b189e35c8e37bad" frameborder=0></iframe>

Here we associated the click of all buttons to the addToCartfunction. This will send a message to the parent window, which is the composition page, with the value of the target, which is the fruit name.

### cart/index.html

<iframe src="https://medium.com/media/0a9d9bc52fe80a6a35ea98f8c7283a0d" frameborder=0></iframe>

And, finally, our cart in Vue.js. On the beforeMount() we set the cart window to listen to the messages from the parent. The add()method adds 1 to the products data, according to the fruit name.

### Git repository

You can check this project on GitHub. We improved the message handling and added some style with bootstrap.

[https://github.com/andregardi/micro-frontends-iframe](https://github.com/andregardi/micro-frontends-iframe)


