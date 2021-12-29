module Mutations
  class CreateAuthor < BaseMutation
    # arguments passed to the `resolve` method
    argument :name, String, required: true
    argument :email, String, required: true
    argument :age, Integer, required: true

    # return type from the mutation
    type Types::AuthorType

    def resolve(name: nil, email: nil, age: nil)
      Author.create!(
        name: name,
        email: email,
        age: age
      )
    end
  end
end