import React from "react";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Mi Portafolio</h2>
      <span className="section__subtitle">Mis proyectos</span>
      <div class="carousel" mask>
	<article>
		<img src="https://images.pexels.com/photos/635699/pexels-photo-635699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
		<h2>The Cross</h2>
		<div>
			<p>The Cross is a central symbol of Easter, representing the crucifixion of Jesus Christ and his sacrifice for humanity. It serves as a reminder of suffering, love, and redemption, and is often displayed during Holy Week and Easter Sunday to honor the foundation of Christian faith.</p>

			<a href="#">Read more</a>
		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/7168798/pexels-photo-7168798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="easter eggs" />
		<h2>Easter Eggs</h2>
		<div>
			<p>Easter eggs are a colorful symbol of new life and rebirth, often decorated and hidden for festive hunts. The tradition comes from ancient spring rituals and was later adopted into Easter celebrations to represent the resurrection.</p>

			<a href="#">Read more</a>
		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/4099179/pexels-photo-4099179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hot cross buns" />
		<h2>Hot Cross Buns</h2>
		<div>
			<p>Hot cross buns are sweet, spiced buns marked with a cross on top, traditionally eaten on Good Friday. They originated in England and symbolize the crucifixion, with the cross representing Jesus and the spices recalling burial traditions.</p>

			<a href="#">Read more</a>
		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/5145/animal-easter-chick-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="easter chick" />
		<h2>Easter Chick</h2>
		<div>
			<p>Easter chicks are a cheerful symbol of new life and beginnings, often seen alongside eggs in spring decorations. They represent birth and renewal, tying into the themes of Easter and the arrival of spring.</p>

			<a href="#">Read more</a>
		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/2072158/pexels-photo-2072158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="easter bunny" />
		<h2>Easter Bunnies</h2>
		<div>
			<p>Easter bunnies are a popular symbol of spring and new life, often seen delivering colorful eggs to children.</p>

			<a href="#">Read more</a>
		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/12787666/pexels-photo-12787666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="crown of thorms" />
		<h2>Crown of Thorns</h2>
		<div>
			<p>The Crown of Thorns symbolizes the suffering of Jesus before his crucifixion. It represents the pain he endured for humanity’s salvation and is a reminder of his sacrifice during Easter.</p>

			<a href="#">Read more</a>
		</div>
	</article>

</div>
    </section>
  );
};

export default Portfolio;
