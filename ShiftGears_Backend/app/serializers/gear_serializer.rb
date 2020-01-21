class GearSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :img_url, :size
end
