class CreateRigInspections < ActiveRecord::Migration[6.1]
  def change
    create_table :rig_inspections do |t|
      t.references :checklist, null: false, foreign_key: true
      t.references :inspected_by, null: false, foreign_key: { to_table: :users }
      t.references :rig, null: false, foreign_key: true

      t.timestamps
    end
  end
end
