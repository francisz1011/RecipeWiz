import React from 'react';

function About() {
  return (
    <section id='about' className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto text-center font-serif">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-600">
          About Us
        </h2>
        <div className="text-justify text-xl mb-6 ml-[150px] mr-[150px]">
          <p>
            Welcome to RecipeWiz, your ultimate cooking companion! We're
            passionate about making your culinary adventures exciting,
            convenient, and delicious.
          </p>
          <p>
            At RecipeWiz, we believe that everyone, from seasoned chefs to
            kitchen novices, should have access to mouthwatering recipes tailored
            to their tastes and dietary preferences.
          </p>
        </div>
        <div className="text-justify text-xl mb-6 ml-[150px] mr-[150px]">
          <h3 className="text-2xl font-semibold mb-2 ">How RecipeWiz Works</h3>
          <ul className="list-disc ml-8">
            <li>
              <p>
                <strong>Tell Us What You Have:</strong> Input the ingredients
                you have on hand or let us know your dietary restrictions and
                preferences.
              </p>
            </li>
            <li>
              <p>
                <strong>Let AI Magic Happen:</strong> Our cutting-edge AI
                algorithms work their magic to curate a selection of delectable
                recipes tailored just for you.
              </p>
            </li>
            <li>
              <p>
                <strong>Cook and Enjoy:</strong> Follow the step-by-step
                instructions, and voilà! You'll be savoring restaurant-quality
                dishes in the comfort of your home.
              </p>
            </li>
          </ul>
        </div>
        <div className="text-justify text-xl mb-6 ml-[150px] mr-[150px]">
          <h3 className="text-2xl font-semibold mb-2">Why Choose RecipeWiz?</h3>
          <ul className="list-disc ml-8">
            <li>
              <p>
                <strong>Personalized Recommendations:</strong> RecipeWiz
                considers your dietary restrictions, allergies, and ingredient
                availability to provide recipes that suit your needs.
              </p>
            </li>
            <li>
              <p>
                <strong>Endless Inspiration:</strong> Discover new cuisines,
                cooking techniques, and ingredients you never knew existed.
              </p>
            </li>
            <li>
              <p>
                <strong>Save Time and Money:</strong> Reduce food waste by using
                what you already have and get creative with your leftovers.
              </p>
            </li>
            <li>
              <p>
                <strong>Community and Learning:</strong> Join our community of
                food enthusiasts, share your culinary creations, and learn from
                others.
              </p>
            </li>
          </ul>
        </div>
        <div className="text-justify text-xl mb-6 ml-[150px] mr-[150px]">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <p>
            Have questions or feedback? We'd love to hear from you! Reach out to
            us at{' '}
            <a
              href="mailto:contact@recipewiz.com"
              className="text-yellow-400 hover:underline"
            >
              contact@recipewiz.com
            </a>{' '}
            or connect with us on social media.
          </p>
        </div>
        <div className="text-justify text-xl ml-[150px] mr-[150px]">
          <p>
            <strong>Happy Cooking!</strong> Thank you for choosing RecipeWiz as
            your culinary partner. Let's whip up some culinary magic together
            and create memorable meals that bring joy to your table.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
