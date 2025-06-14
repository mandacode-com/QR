// Code generated by ent, DO NOT EDIT.

package targettype

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the targettype type in the database.
	Label = "target_type"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldType holds the string denoting the type field in the database.
	FieldType = "type"
	// EdgeQrTargets holds the string denoting the qr_targets edge name in mutations.
	EdgeQrTargets = "qr_targets"
	// Table holds the table name of the targettype in the database.
	Table = "target_types"
	// QrTargetsTable is the table that holds the qr_targets relation/edge.
	QrTargetsTable = "qr_targets"
	// QrTargetsInverseTable is the table name for the QrTarget entity.
	// It exists in this package in order to avoid circular dependency with the "qrtarget" package.
	QrTargetsInverseTable = "qr_targets"
	// QrTargetsColumn is the table column denoting the qr_targets relation/edge.
	QrTargetsColumn = "target_type_id"
)

// Columns holds all SQL columns for targettype fields.
var Columns = []string{
	FieldID,
	FieldType,
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	return false
}

var (
	// TypeValidator is a validator for the "type" field. It is called by the builders before save.
	TypeValidator func(string) error
	// IDValidator is a validator for the "id" field. It is called by the builders before save.
	IDValidator func(int) error
)

// OrderOption defines the ordering options for the TargetType queries.
type OrderOption func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByType orders the results by the type field.
func ByType(opts ...sql.OrderTermOption) OrderOption {
	return sql.OrderByField(FieldType, opts...).ToFunc()
}

// ByQrTargetsCount orders the results by qr_targets count.
func ByQrTargetsCount(opts ...sql.OrderTermOption) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborsCount(s, newQrTargetsStep(), opts...)
	}
}

// ByQrTargets orders the results by qr_targets terms.
func ByQrTargets(term sql.OrderTerm, terms ...sql.OrderTerm) OrderOption {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newQrTargetsStep(), append([]sql.OrderTerm{term}, terms...)...)
	}
}
func newQrTargetsStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(QrTargetsInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.O2M, false, QrTargetsTable, QrTargetsColumn),
	)
}
