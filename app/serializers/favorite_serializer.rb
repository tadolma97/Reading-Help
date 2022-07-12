class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :story_id
end
