module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField
    include Types::ModelsQueryType

    field :all_books, [Types::BookType], null: false
  end
end
