import React, {useState, useEffect, useCallback} from 'react';
import API from './services/api';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import SortDropdown from './components/SortDropdown';
import SalesTable from './components/SalesTable';
import Pagination from './components/Pagination';

function buildQueryParams(state) {
  const params = {};
  if (state.search) params.search = state.search;
  if (state.page) params.page = state.page;
  params.pageSize = state.pageSize || 10;
  if (state.sortBy) params.sortBy = state.sortBy;
  if (state.sortOrder) params.sortOrder = state.sortOrder;
  if (state.filters) {
    const f = state.filters;
    if (f.regions) params.regions = f.regions;
    if (f.genders) params.genders = f.genders;
    if (f.categories) params.categories = f.categories;
    if (f.tags) params.tags = f.tags;
    if (f.paymentMethods) params.paymentMethods = f.paymentMethods;
    if (f.dateFrom) params.dateFrom = f.dateFrom;
    if (f.dateTo) params.dateTo = f.dateTo;
    if (f.ageMin) params.ageMin = f.ageMin;
    if (f.ageMax) params.ageMax = f.ageMax;
  }
  return params;
}

export default function App(){
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = buildQueryParams({ search, page, pageSize, sortBy, sortOrder, filters });
      const resp = await API.get('/sales', { params, paramsSerializer: { indexes: null } });
      setData(resp.data.data);
      setTotalPages(resp.data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [search, page, pageSize, sortBy, sortOrder, filters]);

  useEffect(()=> { fetchData(); }, [fetchData]);

  function onSearchSubmit(){
    setPage(1);
    fetchData();
  }

  function onApplyFilters(newFilters){
    setFilters(newFilters || {});
    setPage(1);
  }

  function onPageChange(newPage){
    if (newPage < 1) return;
    if (newPage > totalPages) return;
    setPage(newPage);
  }

  useEffect(()=> { fetchData(); }, [page, sortBy, sortOrder]);

  return (
    <div style={{padding:20}}>
      <h2>TruEstate — Retail Sales</h2>
      <SearchBar value={search} onChange={setSearch} onSubmit={onSearchSubmit} />
      <SortDropdown sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <FilterPanel onApply={onApplyFilters} />
      {loading ? <div>Loading...</div> : <SalesTable data={data} />}
      <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
