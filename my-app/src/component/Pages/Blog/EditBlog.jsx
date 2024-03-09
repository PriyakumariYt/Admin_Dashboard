import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blog1 from "../../Images/blog1.jpg";
import blog2 from "../../Images/blog2.jpg";
import blog3 from "../../Images/blog3.jpg";
import blog5 from "../../Images/blog5.jpg";
import blog6 from "../../Images/blog6.jpg";
import blog7 from "../../Images/blog7.jpg";

export default function EditBlog() {
  useEffect(()=>{
    function setPageTitle(pageName){
      document.title= `${pageName}`;
    }
    setPageTitle('Edit Blog');
  })
  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [blogImagePrev, setBlogImagePrev] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBlogs = [
      { _id: 1, name: "Festive Fashion: Inspiring Winter Wedding Outfit", image: blog2, description: "Embracing the enchantment of winter, festive fashion takes center stage for those celebrating love amidst the snowy landscapes. A winter wedding offers a unique canvas for crafting a memorable and stylish ensemble. Imagine the bride adorned in a gown that mirrors the ethereal beauty of a snow-covered landscape. A floor-length dress with intricate lace detailing and long sleeves not only exudes elegance but also provides warmth against the winter chill. For the groom, a tailored velvet suit in deep, rich hues like burgundy or emerald green adds a touch of opulence, perfectly complementing the seasonal atmosphere. Accessories play a pivotal role in elevating the festive charm of winter wedding attire. The bride can opt for a faux fur stole or capelet to add a touch of glamour and stay cozy during outdoor moments. Delicate snowflake-inspired jewelry, such as earrings or a necklace, adds a subtle nod to the season. The groom can accentuate his look with a stylish boutonniere featuring winter blooms or even miniature pinecones, embracing the natural beauty of the season. Footwear takes a practical yet fashionable turn for a winter wedding. Elegant boots for the bride, perhaps adorned with subtle crystal embellishments, ensure comfort while navigating potential snow-covered paths. The groom can opt for polished leather boots that seamlessly merge sophistication with functionality. For both, custom-made, warm wool socks can be a delightful and practical surprise, keeping toes toasty during the festivities. When it comes to color palettes, winter weddings invite a range of choices beyond the traditional whites and creams. Rich jewel tones such as deep reds, emerald greens, and royal blues evoke a sense of warmth and regality. Incorporating metallic accents like gold or silver adds a touch of glamour, mirroring the glistening snowflakes. Bridesmaids and groomsmen can complement the main color scheme with coordinated dresses and suits, creating a visually stunning and cohesive bridal party. The choice of fabrics is crucial in achieving both comfort and style in winter wedding fashion. Velvet, with its luxurious texture, becomes a standout choice for the season, offering warmth without compromising on sophistication. Satin and silk can also be incorporated into the ensemble, adding a touch of sheen that captures the enchantment of winter. Additionally, consider layering for both practicality and style – think intricately designed shawls or capes for the bride and tailored overcoats for the groom. For makeup and hairstyling, a winter wedding allows for a blend of classic and contemporary choices. The bride can opt for a timeless, bold red lip to add a pop of color against the winter whites, while a romantic updo or loose curls adorned with subtle hairpins complements the overall look. The groom can experiment with a well-groomed beard or a classic clean shave, depending on personal style, and subtle grooming touches that enhance the overall aesthetic. In conclusion, a winter wedding is an opportunity to embrace the magic of the season through inspired fashion choices." },
      { _id: 2, name: "A Glamorous Guide to Fascinating Diwali Outfit Ideas for Women", image: blog3, description: "Diwali, the festival of lights, is not just a celebration of traditions but also a time to showcase your glamorous side with stunning outfits that reflect the joyous spirit of the occasion. As women prepare to illuminate their homes and hearts, the quest for the perfect Diwali ensemble begins. From traditional sarees to contemporary lehengas, the options are as diverse as the festival itself. For those who love the timeless allure of tradition, a rich and vibrant silk saree is an evergreen choice. Choose bold colors like royal blue, emerald green, or deep red adorned with intricate zari work or embroidered borders. Pair it with a contrasting blouse and statement jewelry to complete the regal look that resonates with the festive fervor. If you're inclined towards a fusion of tradition and modernity, a lehenga with a twist might be the answer. Opt for a contemporary silhouette with a crop top and flared skirt, embellished with sequins, beads, or threadwork. Experiment with unconventional color combinations like pastels with bold accents to add a touch of freshness to your Diwali ensemble. For those embracing the ease of a salwar suit, an Anarkali or straight-cut suit in festive colors and ornate detailing can be both comfortable and stylish. Choose fabrics like silk or georgette for an elegant drape, and don't shy away from experimenting with asymmetrical hemlines or unconventional neck designs to stand out in the crowd. As accessories play a pivotal role in completing any Diwali look, consider statement pieces like oversized earrings, maang tikka, or a bold clutch to add that extra touch of glamour. And don't forget the importance of comfortable yet stylish footwear to dance the night away during the Diwali celebrations. Whether you choose the classic elegance of a saree, the contemporary charm of a lehenga, or the comfort of a salwar suit, let your Diwali outfit be a reflection of your personality and style. After all, Diwali is not just a festival; it's a celebration of light, love, and the joy of dressing up in all your glamorous glory." },
      { _id: 3, name: "Explore Unique Christmas Outfit Ideas for a Holly Jolly Look", image: blog6, description: "The season of merriment and joy is upon us, and what better way to celebrate than by donning a festive ensemble that exudes Christmas cheer? This holiday season, step away from the conventional and explore unique Christmas outfit ideas that will have you looking holly jolly and standing out at every gathering. Consider embracing the whimsy of Christmas with a playful holiday-themed sweater paired with stylish leggings or skinny jeans. Opt for a design that incorporates classic Christmas motifs like reindeers, snowflakes, or jolly Santas. Top it off with a cozy beanie or a Santa hat for that extra touch of festive charm. Not only is this look comfortable and casual, but it also radiates a laid-back holiday spirit that's perfect for family gatherings or a festive movie night. For those who prefer a touch of elegance with a modern twist, a velvet jumpsuit or a tailored pantsuit in rich, jewel-toned colors is an excellent choice. Deep burgundies, emerald greens, or royal blues evoke a sense of sophistication while capturing the festive essence of the season. Add a statement necklace or a pair of bold earrings to elevate the look, and you'll be ready to shine at office holiday parties or upscale festive dinners. If you're dreaming of a white Christmas, why not incorporate it into your outfit? A chic winter white or cream-colored sweater dress paired with knee-high boots can create a look that's both cozy and stylish. Add a touch of glam with a faux fur stole or a statement belt, and you'll be the epitome of winter elegance. This ensemble is perfect for Christmas brunches, festive outings, or even a magical winter date night. Channel your inner Mrs. Claus by embracing the classic red and white color palette. A festive red midi or maxi dress paired with white ankle boots or pumps is a timeless choice that radiates holiday charm. Complete the look with a faux fur collar or a stylish beret, and you'll be ready to spread Christmas cheer at holiday gatherings and festive events. For those who want to make a bold statement, metallics are the way to go. A shimmering gold or silver dress or jumpsuit is a show-stopping choice that captures the sparkle and magic of the season. Pair it with metallic heels and minimal accessories to let the outfit take center stage. This glamorous look is perfect for upscale Christmas parties, New Year's Eve celebrations, or any event where you want to shine bright. No Christmas outfit is complete without the perfect accessories. Consider adding festive touches like statement earrings in the shape of Christmas trees or snowflakes, a holiday-themed clutch, or even a sequined mask for a touch of glamour and practicality. Don't forget to coordinate your festive manicure and makeup to tie the entire look together. This holiday season, break free from the ordinary and infuse your Christmas wardrobe with unique and stylish choices that reflect your personality and the festive spirit. Whether you're aiming for casual comfort, modern elegance, winter whites, classic reds, or glamorous metallics, there's a Christmas outfit idea for everyone." },
      { _id: 4, name: "Effortless Elegance: Mastering the Art of Casual Chic", image: blog7, description: "In a world that often races at breakneck speed, the appeal of a chic and casual outfit cannot be overstated. The beauty lies in the balance between comfort and style, a realm where fashion seamlessly blends with ease. Casual wear for women has evolved beyond the realm of sweatpants and oversized tees, ushering in an era of sophistication and versatility. Let's explore the art of mastering casual chic, where comfort meets elegance, and every outfit tells a story of effortless style. Start with the basics – a well-fitted pair of jeans. Whether it's classic blue denim, trendy distressed styles, or wide-leg cuts, the right pair of jeans sets the foundation for a myriad of casual looks. Pair them with a timeless white tee for an understated yet polished ensemble. The simplicity of this combination allows for endless possibilities when it comes to accessorizing and layering. Speaking of layers, a stylish jacket or cardigan can elevate a casual outfit to new heights. A classic leather jacket adds an edge to a simple jeans-and-tee combo, while a cozy oversized cardigan brings warmth and a touch of bohemian flair. Experiment with textures, colors, and lengths to find the perfect layering piece that complements your personal style. The allure of a casual dress should not be underestimated. Opt for easy-to-wear silhouettes like shirt dresses, wrap dresses, or shift dresses that effortlessly marry comfort with femininity. Dress them down with sneakers for a laid-back vibe or throw on a pair of ankle boots for an added touch of sophistication. Casual dresses are a versatile staple that effortlessly transitions from a coffee date to a weekend stroll in the park. Footwear plays a crucial role in completing a casual chic look. While sneakers and slip-on flats are go-to choices for an easygoing day out, don't shy away from incorporating ankle boots, espadrilles, or stylish loafers for a more polished feel. The right pair of shoes can transform a casual ensemble into a fashion statement." },
      { _id: 5, name: "Sartorial Harmony: Crafting the Perfect Family Wedding Ensemble", image: blog1, description: "A family wedding is not just a celebration of love; it's a grand affair that brings together generations, creating a tapestry of memories and joy. As each member plays a unique role in this symphony of togetherness, choosing the perfect family wedding outfit becomes an art form. The challenge lies in striking a sartorial harmony that not only complements the grandeur of the occasion but also reflects the distinct personalities within the family. For matriarchs and patriarchs, the timeless elegance of traditional attire reigns supreme. Sarees and sherwanis, adorned with intricate embroidery and regal embellishments, speak of grace and dignity, creating a visual anchor for the familial tableau. For the younger generation, the canvas is more diverse, offering a spectrum of choices to express individual style within the overarching theme of familial unity. Anarkalis, lehengas, or tailored suits for the ladies, and sherwanis or well-fitted suits for the gentlemen – each ensemble a testament to the fusion of tradition and contemporary flair. Coordinating color palettes and patterns among family members adds a layer of visual cohesion, creating a collective presence that is both striking and harmonious. Accessories become the embellishments that weave the narrative of the family's shared identity. For the ladies, it could be heirloom jewelry passed down through generations, while for the gentlemen, it might be the subtle glint of a pocket square or the choice of a classic timepiece. The careful selection of accessories not only complements the outfits but also reinforces the narrative of familial continuity. Footwear, often the unsung hero, plays a crucial role in the family wedding ensemble. Comfort and style intertwine as ladies opt for intricately designed juttis or stilettos, and gentlemen choose between traditional mojaris or polished formal shoes. The right footwear not only completes the look but also ensures that each family member can step into the festivities with confidence and ease." },
      { _id: 6, name: "Festive Frolics: Unwrapping the Magic of Christmas Outfits for Kids", image: blog5, description: "As the festive season approaches, the excitement in the air is palpable, especially for the little ones eagerly awaiting the arrival of Santa Claus. Dressing kids for Christmas is a delightful affair, where the goal is not just to clothe them but to transform them into living embodiments of holiday cheer. From cozy Christmas pajamas for the magical Christmas Eve to festive party outfits that twinkle under the twinkling lights, selecting the perfect Christmas ensemble for kids is an art that parents and caregivers joyfully master each year. For the youngest members of the family, onesies adorned with adorable reindeer or snowman prints create a picture-perfect look for Christmas morning. These snug outfits not only keep the little ones warm but also add an extra layer of cuteness as they unwrap their presents with wide-eyed wonder. For the fashion-forward tots, opting for a stylish Christmas sweater paired with comfortable leggings or cute skirts brings a touch of sophistication to the festive ensemble. Look for sweaters featuring cheerful holiday characters, glittery ornaments, or even interactive elements like jingling bells that capture the playful spirit of the season. Dressing up little princesses for Christmas festivities often involves the twirl-worthy charm of festive dresses. Red velvet, sparkling tulle, or classic plaid prints are popular choices, creating a look that's both elegant and whimsical. Add a dash of holiday magic with accessories like bows, ribbons, and shiny Mary Jane shoes that complete the enchanting ensemble. For the dapper young gentlemen, a Christmas-themed button-down shirt paired with comfortable jeans or dress pants strikes the perfect balance between festive and casual. " },
    ];
  
    const selectedBlog = mockBlogs.find(blog => blog._id.toString() === blogId);
    if (selectedBlog) {
      setBlog({
        name: selectedBlog.name,
        image: selectedBlog.image,
        description: selectedBlog.description,
      });
      setBlogImagePrev(selectedBlog.image);
    }
  }, [blogId]);

  const handleEditBlog = () => {
    console.log("Editing blog:", blog);
    navigate("/bloglist");
  };

  const handleImageChange = (e) => {
    console.log("Image changed:", e.target.files[0]);
  };

  const handleCancelEdit = () => {
    navigate("/bloglist");
  };


  return (
 <>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-bold font-monospace text-center m-2">
        Edit Blog
      </h2>
      <div className="cardA rounded bg-white border shadow p-4 mb-3">
        <form className="row g-3">
          <div className="col-12">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              value={blog.name}
              onChange={(e) => setBlog({ ...blog, name: e.target.value })}
              name="name"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              type="text"
              value={blog.description}
              onChange={(e) => setBlog({ ...blog, description: e.target.value })}
              name="description"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Image</label>
            <input
              className="form-control"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="col-12 text-center">
            {blogImagePrev && (
              <img
                src={blogImagePrev}
                alt={`${blogImagePrev}'s Profile`}
                className="img-thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </div>
          <div className="col-12 mt-4 text-center">
            <button
              className="btn btnA me-4"
              type="button"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
            <button
              className="btn btnA"
              type="button"
              onClick={handleEditBlog}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  );
}
