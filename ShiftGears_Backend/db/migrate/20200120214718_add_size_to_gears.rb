class AddSizeToGears < ActiveRecord::Migration[6.0]
  def change
    add_column :gears, :size, :string
  end
end
