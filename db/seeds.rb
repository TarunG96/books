# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


20.times do |i|
  author = Author.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    age: rand(30..80)
  )

  20.times do |j|
    author.books.create(
      title: Faker::Beer.name
    )
  end

end