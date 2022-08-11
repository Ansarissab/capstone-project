class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :category_id, :image_url, :name, :description, :location, :note
end
