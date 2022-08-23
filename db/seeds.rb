require 'faker'

puts "Deleting old data..."
User.destroy_all
Category.destroy_all
Activity.destroy_all
Like.destroy_all
BucketList.destroy_all
ActivityBucketList.destroy_all

puts "Getting new data..."
#creating users

 User.create!( username: "Hayetk", password_digest: "test" )


# creating categories
c1 = Category.create!( name: "Accra Nightlife", description: "xplore the infamous streets of Ghana that come alive at night time"  )
c2 = Category.create!( name: "Adventures", description: "hiking, paragliding and much more!" )
c3 = Category.create!( name: "Festivals" , description:  "immerse yourself in culture and celebrate in grand style. Don't miss out on the Ankos Festival ;)" )
c4 = Category.create!( name: "Events" , description: "see events and shows that define December enjoyment" )
# c5 = Category.create!( name: "Indegenous Living", description: "Ditch the 'high-life' and explore the streets of Ghana the local way" )
# c6 = Category.create!( name: "Historic Landmarks", description: "connect with Mother Ghana by visiting historic places" )
# c7 = Category.create!( name: "Religious", description: "Take part in religion, as it is a major lifestyle of many Ghanaians" )
# c8 = Category.create!( name: "Relax and Unwind", description: "Take it slow, leave the busy streets of Accra, and rejuvinate in beatiful towns of Cape Coast, Western and Northern Regions" )

#creating activities
a1 = Activity.create!( category_id: c1.id, image_url:"https://media.timeout.com/images/102992933/1372/772/image.jpg" , name:"Twist Lounge", description:"One of Ghana's longest existing nightclubs " , location:"Cantonments, Accra"  )
a2 = Activity.create!( category_id: c1.id, image_url:"https://media-cdn.tripadvisor.com/media/photo-s/16/8a/f4/89/bloombar-is-a-vibe-everyone.jpg" , name: "Bloombar", description: "enjoy the best cocktails outdoors with great music from top DJs", location: "Osu, Accra" )
a3 = Activity.create!( category_id: c1.id, image_url:"https://media-cdn.tripadvisor.com/media/photo-s/16/fd/dc/6a/photo2jpg.jpg" , name: "+233 Jazz Bar and Grill", description:"chill out with jazz and the best high-life tunes" , location:"Cantonments, Accra"  )
a4 = Activity.create!( category_id: c2.id, image_url:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/7c/72/87.jpg" , name: "Boti Falls", description: "Frolick in this beautiful waterfall and take a hike to see the three headed palm tree ", location:"Eastern Region, Ghana"  )
a5 = Activity.create!( category_id: c2.id, image_url:"https://sites.google.com/site/ghanacoachandtour/_/rsrc/1385307284169/home/tour/paga-crocodile-pond/1236296735.jpg" , name:"Paga Crocodile Pond" , description:"Meet the friendly crocodiles of West Africa" , location:"Bolgatanga, Ghana"  )
a6 = Activity.create!( category_id: c2.id, image_url:"https://visitghana.com/wp-content/uploads/2018/10/2028_DSC09615.jpg" , name:"Kakum National Park" , description:"Forest and canopy walk adventures" , location: "Central Region , Ghana")
a7 = Activity.create!( category_id: c3.id, image_url:"https://newsghana.com.gh/wp-content/uploads/2021/12/Social-Feok-festival-.jpg", name:"Feok Festival" , description:"Witness natives wear warrior costumes and display their rich, giving thanks to their ancestors for bountiful harvest through dancing" , location:"Sandema, Upper East Region")
a8 = Activity.create!( category_id: c3.id, image_url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Ankos.jpg" , name:"Ankos Festival" , description:"Flamboyant Christmas in Takoradi" , location:"Takoradi, Ghana")
a9 = Activity.create!( category_id: c3.id, image_url:"https://cdn.tourradar.com/s3/tour/1500x800/179989_7d92a258.jpg", name:"Afrochella" , description:"Celebration of Africa's diversity with music, cuisine and cultural arts" , location: "Afrochella" )
a10 = Activity.create!( category_id: c4.id, image_url:"https://symphonicmusicgh.com/assets/gallery/gallery-1.jpg" , name:"Symphonic Gospel Meets Orchesta" , description:"Enjoy African gospel accompanied with orchestra", location:"Accra, Ghana")
a11 = Activity.create!( category_id: c4.id, image_url:"https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/04/bgkjd.jpg" , name: "Accra Fashion Week", description:"Fall in love with premium clothing crafted by the finest African Designers" , location:"Accra, Ghana")
a12 = Activity.create!( category_id: c4.id, image_url:"https://ichef.bbci.co.uk/news/800/cpsprodpb/39DA/production/_108501841_ghanaindex.jpg.webp" , name:"Jollof Festival" , description:"Popular amongst Sierra Leone, Ghana, Nigeria is the one and only Jollof Rice. Get your appetite whepped, vote for your best jollof dish and have a great time", location:"Accra, Ghana"  )
# a13 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a14 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a15 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a16 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a17 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a18 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a19 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a20 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a21 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a22 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a23 = Activity.create!( category_id: , image_url: , name: , description: , location: )
# a24 = Activity.create!( category_id: , image_url: , name: , description: , location: )

#creating likes
5.times do
    Like.create!( user_id:User.all.sample.id, activity_id: Activity.all.sample.id, likes: rand(1..20) )
end

b1 = BucketList.create!(user_id:User.all.sample.id , name: "list 1")
b2 = BucketList.create!(user_id:User.all.sample.id , name: "list 2")
b3 = BucketList.create!(user_id:User.all.sample.id , name: "list 3")

a1 = ActivityBucketList.create!(activity_id:Activity.all.sample.id , bucket_list_id: BucketList.all.sample.id)
a2 = ActivityBucketList.create!(activity_id:Activity.all.sample.id , bucket_list_id: BucketList.all.sample.id)
a3 = ActivityBucketList.create!(activity_id:Activity.all.sample.id , bucket_list_id: BucketList.all.sample.id)


#creating activity bucket list

puts "seeding done!"