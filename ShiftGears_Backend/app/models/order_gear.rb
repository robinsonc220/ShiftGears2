class OrderGear < ApplicationRecord
    belongs_to :order
    has_many :gears
end
